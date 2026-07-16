/* =========================================
   HABOUSH — Main Script
   حبوش — الكود التفاعلي الرئيسي
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // === عناصر الواجهة ===
  const productsGrid = document.getElementById("products-grid");
  const noResults = document.getElementById("no-results");
  const searchInput = document.getElementById("search-input");
  const productsCount = document.getElementById("products-count");
  const categoryCards = document.querySelectorAll(".category-card");
  
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  const navLinksList = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const cartBtn = document.getElementById("cart-btn");
  const cartClose = document.getElementById("cart-close");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmpty = document.getElementById("cart-empty");
  const cartFooter = document.getElementById("cart-footer");
  const totalPriceEl = document.getElementById("total-price");
  const cartCountEl = document.getElementById("cart-count");
  const whatsappOrderBtn = document.getElementById("whatsapp-order-btn");
  
  const toast = document.getElementById("toast");

  // === عناصر نافذة تفاصيل المنتج ===
  const productModal = document.getElementById("product-modal");
  const modalClose = document.getElementById("modal-close");
  const modalEmoji = document.getElementById("modal-emoji");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalPrice = document.getElementById("modal-price");
  const modalAddBtn = document.getElementById("modal-add-btn");
  const modalWaBtn = document.getElementById("modal-wa-btn");

  // === حالة التطبيق ===
  let currentCategory = "all";
  let searchQuery = "";
  let cart = JSON.parse(localStorage.getItem("haboush_cart")) || [];

  // === تهيئة كميات المخزون في الـ localStorage ===
  let productStocks = JSON.parse(localStorage.getItem("haboush_product_stocks"));
  if (!productStocks) {
    productStocks = {};
    products.forEach(p => {
      // كمية افتراضية للمنتجات (مثال: 50 قطعة للبشرة والمكياج، و 15 للأجهزة الكهربائية)
      let initialStock = 50;
      if (p.category === "tools" || p.category === "removal") {
        initialStock = 15; // أدوات الصالون والأجهزة كمياتها أقل
      }
      productStocks[p.id] = initialStock;
    });
    localStorage.setItem("haboush_product_stocks", JSON.stringify(productStocks));
  }

  // === تهيئة التطبيق ===
  updateCartUI();
  renderProducts();

  // === تغيير مظهر الهيدر عند التمرير ===
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // === القائمة الجانبية للموبايل ===
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navLinksList.classList.toggle("mobile-open");
  });

  // إغلاق قائمة الموبايل عند الضغط على أي رابط
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // تعديل الرابط النشط
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      menuBtn.classList.remove("open");
      navLinksList.classList.remove("mobile-open");
    });
  });

  // العودة للرئيسية عند الضغط على الشعار
  document.getElementById("logo-btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navLinks.forEach(l => l.classList.remove("active"));
    navLinks[0].classList.add("active");
  });

  // === فتح وإغلاق سلة التسوق ===
  const toggleCart = () => {
    cartSidebar.classList.toggle("open");
    cartOverlay.classList.toggle("open");
    document.body.style.overflow = cartSidebar.classList.contains("open") ? "hidden" : "";
  };

  cartBtn.addEventListener("click", toggleCart);
  cartClose.addEventListener("click", toggleCart);
  cartOverlay.addEventListener("click", toggleCart);

  // === فتح وإغلاق نافذة تفاصيل المنتج ===
  const openProductModal = (product) => {
    const totalStock = productStocks[product.id] || 50;
    const cartItem = cart.find(item => item.id === product.id);
    const cartQty = cartItem ? cartItem.quantity : 0;
    const availableStock = totalStock - cartQty;

    // تحديد وسيط العرض (صورة أو إيموجي)
    if (product.image) {
      modalEmoji.innerHTML = `<img src="${product.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius);" />`;
    } else {
      modalEmoji.innerHTML = `<span class="modal-emoji-text" style="font-size: 96px;">${product.emoji}</span>`;
    }

    modalCategory.textContent = getCategoryName(product.category);
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.description;
    modalPrice.textContent = `${product.price} ₪`;
    
    // زر الإضافة للسلة في المودال
    if (availableStock === 0) {
      modalAddBtn.textContent = "نفذت الكمية ✕";
      modalAddBtn.disabled = true;
      modalAddBtn.style.opacity = "0.5";
      modalAddBtn.style.cursor = "not-allowed";
      modalAddBtn.onclick = null;
    } else {
      modalAddBtn.textContent = "أضيفي للسلة 🛍️";
      modalAddBtn.disabled = false;
      modalAddBtn.style.opacity = "";
      modalAddBtn.style.cursor = "";
      modalAddBtn.onclick = () => {
        addToCart(product.id);
        closeProductModal();
      };
    }

    // ربط زر الاستفسار عبر واتساب للمنتج الفردي
    modalWaBtn.onclick = () => {
      const messageText = `السلام عليكم، أود الاستفسار عن منتج *"${product.name}"* المعروض بسعر ${product.price} ₪ في متجر حبوش.`;
      const encodedText = encodeURIComponent(messageText);
      window.open(`https://wa.me/970593805308?text=${encodedText}`, "_blank");
    };

    productModal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    productModal.classList.remove("open");
    if (!cartSidebar.classList.contains("open")) {
      document.body.style.overflow = "";
    }
  };

  modalClose.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });

  // === فلترة وتصنيف المنتجات ===
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      currentCategory = card.getAttribute("data-category");
      renderProducts();
    });
  });

  // === البحث عن المنتجات ===
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProducts();
  });

  // === عرض المنتجات حسب الفلتر والبحث ===
  function renderProducts() {
    // 1. فلترة المنتجات
    const filtered = products.filter(product => {
      const matchCat = (currentCategory === "all" || product.category === currentCategory);
      const matchSearch = (product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery));
      return matchCat && matchSearch;
    });

    // 2. تحديث عدد المنتجات المعروضة
    if (searchQuery) {
      productsCount.textContent = `تم العثور على ${filtered.length} منتج`;
    } else {
      if (currentCategory === "all") {
        productsCount.textContent = `عرض جميع المنتجات (${products.length})`;
      } else {
        const catNames = {
          hair: "منتجات الشعر",
          nails: "الأظافر",
          skin: "العناية بالبشرة",
          makeup: "المكياج",
          tools: "أدوات الصالون",
          removal: "إزالة الشعر"
        };
        productsCount.textContent = `${catNames[currentCategory]} (${filtered.length})`;
      }
    }

    // 3. عرض المنتجات في الـ Grid
    productsGrid.innerHTML = "";
    
    if (filtered.length === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
      
      filtered.forEach(product => {
        const totalStock = productStocks[product.id] || 50;
        const cartItem = cart.find(item => item.id === product.id);
        const cartQty = cartItem ? cartItem.quantity : 0;
        const availableStock = totalStock - cartQty;

        // تحديد حالة المخزون ولونه
        let stockText = "";
        let stockClass = "";
        if (availableStock === 0) {
          stockText = "نفذت الكمية ✕";
          stockClass = "out-of-stock";
        } else if (availableStock <= 5) {
          stockText = `متبقي ${availableStock} قطع فقط! ⚠️`;
          stockClass = "low-stock";
        } else {
          stockText = `متوفر: ${availableStock} قطعة ✅`;
          stockClass = "in-stock";
        }

        // تحديد وسيط العرض (صورة أو إيموجي)
        const mediaHtml = product.image 
          ? `<img src="${product.image}" class="product-img" alt="${product.name}" />`
          : `<span class="product-emoji">${product.emoji}</span>`;

        const card = document.createElement("div");
        card.className = "product-card";
        card.style.cursor = "pointer"; // لجعل الكارت يظهر كقابل للضغط
        card.innerHTML = `
          <div class="product-emoji-wrap">
            ${mediaHtml}
            <span class="product-badge-cat">${getCategoryName(product.category)}</span>
          </div>
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-stock-status ${stockClass}">${stockText}</div>
            <p class="product-desc">${product.description}</p>
            <div class="product-footer">
              <span class="product-price">${product.price} ₪</span>
              <button class="add-to-cart-btn" data-id="${product.id}" aria-label="أضف للسلة" ${availableStock === 0 ? "disabled style='opacity: 0.5; cursor: not-allowed;'" : ""}>
                ${availableStock === 0 ? "✕" : "+"}
              </button>
            </div>
          </div>
        `;
        
        // عند الضغط على أي جزء من الكارت (ما عدا زر إضافة السلة)، يفتح مودال التفاصيل
        card.addEventListener("click", (e) => {
          if (!e.target.closest(".add-to-cart-btn")) {
            openProductModal(product);
          }
        });

        productsGrid.appendChild(card);
      });

      // ربط أحداث إضافة السلة للمنتجات في الـ Grid
      document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation(); // منع انتشار الحدث لفتح المودال
          const id = e.target.getAttribute("data-id");
          
          // تحقق إضافي لضمان عدم تجاوز المخزن
          const product = products.find(p => p.id === id);
          const totalStock = productStocks[id] || 50;
          const cartItem = cart.find(item => item.id === id);
          const cartQty = cartItem ? cartItem.quantity : 0;
          
          if (cartQty < totalStock) {
            addToCart(id);
          } else {
            showToast("نعتذر، تم الوصول للحد الأقصى للمخزون! ⚠️");
          }
        });
      });
    }
  }

  // ترجمة اسم التصنيف
  function getCategoryName(cat) {
    const names = {
      hair: "💇 شعر",
      nails: "💅 أظافر",
      skin: "🧖 بشرة",
      makeup: "💄 مكياج",
      tools: "🪮 أدوات",
      removal: "🌸 إزالة شعر"
    };
    return names[cat] || cat;
  }

  // === إدارة سلة التسوق ===

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        emoji: product.emoji,
        quantity: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`تمت إضافة "${product.name}" إلى السلة 🛍️`);
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
  }

  function changeQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    if (delta > 0) {
      // تحقق من المخزون المتاح
      const totalStock = productStocks[id] || 50;
      if (item.quantity >= totalStock) {
        showToast("نعتذر، لا تتوفر كمية أكبر في المخزن! ⚠️");
        return;
      }
    }

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      updateCartUI();
    }
  }

  function saveCart() {
    localStorage.setItem("haboush_cart", JSON.stringify(cart));
  }

  function updateCartUI() {
    // تحديث عداد الأيقونة الرئيسية
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
    
    // إخفاء/إظهار عناصر السلة الفارغة
    if (cart.length === 0) {
      cartEmpty.style.display = "block";
      cartFooter.style.display = "none";
      cartItemsContainer.innerHTML = "";
    } else {
      cartEmpty.style.display = "none";
      cartFooter.style.display = "block";

      // رندر عناصر السلة
      cartItemsContainer.innerHTML = "";
      cart.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
          <span class="cart-item-emoji">${item.emoji}</span>
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">${item.price} ₪</div>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
          </div>
        `;
        cartItemsContainer.appendChild(itemEl);
      });

      // ربط أزرار التحكم بالكمية
      document.querySelectorAll(".qty-minus").forEach(btn => {
        btn.addEventListener("click", () => {
          changeQuantity(btn.getAttribute("data-id"), -1);
        });
      });

      document.querySelectorAll(".qty-plus").forEach(btn => {
        btn.addEventListener("click", () => {
          changeQuantity(btn.getAttribute("data-id"), 1);
        });
      });
    }

    // حساب المجموع الكلي
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.textContent = `${totalPrice} ₪`;

    // تحديث شبكة المنتجات لتعكس التغييرات في الكميات المتوفرة وأزرار الإضافة
    if (typeof renderProducts === "function") {
      renderProducts();
    }
  }

  // === إرسال الطلب عبر واتساب ===
  whatsappOrderBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    // بناء رسالة الواتساب
    let messageText = "السلام عليكم ورحمة الله وبركاته،\n";
    messageText += "أود تقديم طلب جديد من متجر *حبوش | HABOUSH*:\n\n";

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      messageText += `${index + 1}. *${item.name}* (الكمية: ${item.quantity}) - السعر: ${itemTotal} ₪\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    messageText += `\n💵 *المجموع الإجمالي للمنتجات:* ${total} ₪\n`;
    messageText += `📌 *طريقة الدفع المطلوبة:* [يرجى الاختيار: كاش عند الاستلام / بنك فلسطين / جوال باي / بال باي]\n`;
    messageText += `🚚 *عنوان التوصيل:* [يرجى كتابة عنوانك بالتفصيل في قطاع غزة]\n`;

    // ترميز النص ليكون متوافقاً مع الروابط
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/970593805308?text=${encodedText}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, "_blank");

    // خصم الكميات من المخزون الإجمالي وحفظها في localStorage
    cart.forEach(item => {
      if (productStocks[item.id] !== undefined) {
        productStocks[item.id] = Math.max(0, productStocks[item.id] - item.quantity);
      }
    });
    localStorage.setItem("haboush_product_stocks", JSON.stringify(productStocks));

    // تفريغ السلة بعد نجاح الطلب وحفظها
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart(); // إغلاق السلة

    showToast("تم فتح واتساب لإرسال الطلب! شكراً لك 🌸");
  });

  // === إظهار التنبيه (Toast) ===
  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add("show");

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
