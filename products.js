const products = [
  // ===== SKIN CARE - CLEANSERS & GELS =====
  {
    id: "skin-001",
    name: "جل الصبار للوجه - Magic Dream",
    description: "جل الصبار الطبيعي 99% من Magic Dream — يرطب ويهدئ البشرة المتهيجة بلطف شديد. مثالي للاستخدام اليومي كمرطب خفيف أو بعد التعرض للشمس.",
    price: 25,
    category: "skin",
    emoji: "🌿",
    image: "assets/products/جل الصبار.png",
    usage: "ضعي كمية صغيرة على البشرة النظيفة صباحاً ومساءً ودلّكي بحركات دائرية حتى الامتصاص.",
    size: "250ml",
    bestseller: true,
    origin: "فلسطين"
  },
  {
    id: "skin-002",
    name: "جل تنظيف طبي - Bioderma Sebium",
    description: "غسول طبي فعّال من Bioderma مخصص للبشرة الدهنية والمختلطة. يُزيل الزيوت الزائدة والشوائب دون تجفيف، مع الحفاظ على التوازن الطبيعي للبشرة.",
    price: 55,
    category: "skin",
    emoji: "🧴",
    image: "assets/products/Gemini_Generated_Image_rl5tgmrl5tgmrl5t.png",
    usage: "رغّدي الجل مع الماء الفاتر على الوجه الرطب، ثم اشطفيه جيداً. يُستخدم مرة إلى مرتين يومياً.",
    size: "200ml",
    bestseller: true,
    origin: "فرنسا"
  },
  {
    id: "skin-003",
    name: "غسول بشرة جافة - Celenes Cloudberry",
    description: "غسول رغوي لطيف من Celenes by Sweden مصنوع من ثمرة الكلاودبيري الاسكندنافية، مخصص للبشرة الجافة والحساسة. ينظف بعمق دون أن يسلب البشرة ترطيبها الطبيعي.",
    price: 65,
    category: "skin",
    emoji: "🫧",
    image: "assets/products/photo_2026-07-13_23-55-55.png",
    usage: "اغسلي وجهك صباحاً ومساءً بماء فاتر، ثم استخدمي مرطباً مناسباً مباشرة بعد الغسل للحصول على أفضل النتائج.",
    size: "250ml",
    origin: "السويد",
    korean: false
  },
  {
    id: "skin-004",
    name: "غسول حرارة - Celenes Thermal Foaming",
    description: "جل تنظيف رغوي بالمياه الحرارية من Celenes يمنح البشرة نقاءً عميقاً مع الشعور بالانتعاش. مناسب لجميع أنواع البشرة، يُزيل المكياج والأوساخ بلطف.",
    price: 60,
    category: "skin",
    emoji: "💧",
    image: "assets/products/الثاني.png",
    usage: "ضعي كمية مناسبة على البشرة الرطبة، رغّدي ثم اشطفي جيداً بالماء الفاتر. استخدمي مرتين يومياً.",
    size: "250ml",
    origin: "السويد"
  },
  {
    id: "skin-005",
    name: "غسول AHA + BHA - Celenes Peeling",
    description: "غسول تقشير احترافي من Celenes يحتوي على حمض AHA 10% وحمض BHA 2% لإزالة الخلايا الميتة وتجديد البشرة. يُعيد الإشراق ويخفف آثار الحبوب.",
    price: 70,
    category: "skin",
    emoji: "✨",
    image: "assets/products/Gemini_Generated_Image_6q6xbt6q6xbt6q6x.png",
    usage: "استخدمي مرة إلى مرتين في الأسبوع ليلاً فقط. ابدئي بمرة في الأسبوع إذا كانت بشرتك حساسة. تذكري واقي الشمس نهاراً.",
    size: "30ml",
    origin: "السويد"
  },
  {
    id: "skin-006",
    name: "غسول فيتامين C - Celenes Sea Buckthorn",
    description: "غسول غني بفيتامين C ومستخلص نبات Sea Buckthorn من Celenes. يُشرق البشرة ويُوحّد لونها مع التنظيف اليومي. تركيبة مضادة للأكسدة تحارب علامات الشيخوخة.",
    price: 65,
    category: "skin",
    emoji: "🍊",
    image: "assets/products/Gemini_Generated_Image_my0ydpmy0ydpmy0y.png",
    usage: "استخدمي الغسول على البشرة الرطبة صباحاً ومساءً، ثم اشطفيه بالماء الفاتر. أكملي روتينك بسيروم فيتامين C للحصول على أفضل النتائج.",
    size: "250ml",
    origin: "السويد"
  },

  // ===== SKIN CARE - SERUMS & AMPOULES =====
  {
    id: "skin-007",
    name: "سيروم هيالورونيك - Celenes Gojiberry",
    description: "سيروم مركّز يجمع بين حمض الهيالورونيك 2% وثمرة الغوجي بيري من Celenes by Sweden. يرطب البشرة بعمق، يُقلل التجاعيد ويمنح البشرة نضارة شبابية ملحوظة.",
    price: 85,
    category: "skin",
    emoji: "💎",
    image: "assets/products/Gemini_Generated_Image_ut8qo5ut8qo5ut8q.png",
    usage: "ضعي بضع قطرات على البشرة النظيفة قبل المرطب صباحاً ومساءً. انتظري دقيقتين قبل وضع المرطب.",
    size: "30ml",
    bestseller: true,
    origin: "السويد"
  },
  {
    id: "skin-008",
    name: "سنتيلا أمبول - SKIN1004",
    description: "تركيبة مركزة من مستخلص السنتيلا الآسيوية من مدغشقر (SKIN1004 Madagascar Centella Ampoule). تُهدئ التهيج والاحمرار، وترطب بعمق وتدعم تجديد خلايا البشرة. الأنسب للبشرة المجهدة والحساسة.",
    price: 95,
    category: "skin",
    emoji: "🌱",
    image: "assets/products/skin1004_centella_luxury_1784722560110.jpg",
    usage: "استخدمي الأمبول صباحاً ومساءً على بشرة نظيفة قبل المرطب. ولا تنسي واقي الشمس نهاراً.",
    size: "100ml",
    bestseller: true,
    korean: true,
    origin: "كوريا الجنوبية"
  },
  {
    id: "skin-009",
    name: "تونر جليكوليك - The Ordinary 7%",
    description: "تونر تقشيري من The Ordinary بتركيز حمض الجليكوليك 7% عند pH 3.6. يُزيل الخلايا الميتة بلطف، يُخفف البقع الداكنة ويمنح البشرة ملمساً أنعم وأكثر إشراقاً مع الاستخدام المنتظم.",
    price: 75,
    category: "skin",
    emoji: "🔬",
    image: "assets/products/ordinary_glycolic_luxury_1784722477257.jpg",
    usage: "ابدني باستخدامه مرتين أسبوعياً ليلاً. لا تنسي واقي الشمس صباحاً. غير مناسب للبشرة الحساسة جداً.",
    size: "240ml",
    origin: "كندا"
  },

  // ===== SKIN CARE - MOISTURIZERS & CREAMS =====
  {
    id: "skin-010",
    name: "كريم مرطب فيتامين C - Celenes",
    description: "كريم موازن للبشرة المختلطة والدهنية من Celenes غني بفيتامين C. يُرطب دون أن يُثقل، يُوحّد لون البشرة ويُقلل التصبغات مع الاستخدام المنتظم. قوام خفيف سريع الامتصاص.",
    price: 70,
    category: "skin",
    emoji: "🍋",
    image: "assets/products/كريم مرطب.png",
    usage: "ضعي كمية مناسبة على الوجه والرقبة صباحاً ومساءً بعد التنظيف. يمكن استخدامه كقاعدة تحت واقي الشمس.",
    size: "50ml",
    origin: "السويد"
  },
  {
    id: "skin-011",
    name: "كريم يوريا 10% - Carbamide",
    description: "كريم طبي مُرطب عالي الفعالية يحتوي على 10% يوريا (Carbamide). يُعالج الجفاف الشديد والبشرة المتشققة، يُرطب بعمق ويُحسّن نعومة الجلد بشكل ملحوظ.",
    price: 40,
    category: "skin",
    emoji: "💊",
    image: "assets/products/Gemini_Generated_Image_x8jlp8x8jlp8x8jl.png",
    usage: "ضعي الكريم على المناطق الجافة مرة إلى مرتين يومياً. مثالي للكعبين واليدين والمناطق الخشنة.",
    size: "20g",
    origin: "الأردن"
  },
  {
    id: "skin-012",
    name: "كريم بانثينول - Hepta Panthenol",
    description: "كريم Hepta Panthenol المرطب العميق المحتوي على فيتامين B5 (بانثينول). يُسرّع شفاء الجلد، يُهدئ التهيجات ويمنح ترطيباً طويل الأمد. مناسب لجميع أنواع البشرة بما فيها الحساسة.",
    price: 35,
    category: "skin",
    emoji: "💆",
    image: "assets/products/Gemini_Generated_Image_ngyob6ngyob6ngyo.png",
    usage: "ضعي كمية مناسبة على المنطقة المستهدفة مرتين إلى ثلاث مرات يومياً. مناسب للاستخدام بعد الإجراءات التجميلية.",
    size: "50g",
    origin: "فلسطين"
  },
  {
    id: "skin-013",
    name: "جل مرطب هيدروبوست - Neutrogena",
    description: "جل مائي مبتكر من Neutrogena Hydro Boost بحمض الهيالورونيك يرطب البشرة لـ 24 ساعة. قوام خفيف غير دهني، سريع الامتصاص، ويمنح البشرة مظهراً صحياً ومتوهجاً طوال اليوم.",
    price: 80,
    category: "skin",
    emoji: "💧",
    image: "assets/products/neutrogena_hydro_luxury_1784722609542.jpg",
    usage: "استخدمي الجل يومياً صباحاً ومساءً بعد التنظيف. ضعي واقي الشمس نهاراً للحفاظ على نضارة البشرة.",
    size: "50g",
    bestseller: true,
    origin: "USA"
  },
  {
    id: "skin-014",
    name: "كريم سكينوريش - Skinorich",
    description: "كريم متقدم من Skinorich يجمع بين حمض الأزيليك 19% وحمض الكوجيك 2% والبانثينول 5%. يعمل على توحيد لون البشرة، تخفيف التصبغات وتنظيف المسام بعمق.",
    price: 60,
    category: "skin",
    emoji: "⚗️",
    image: "assets/products/skinorich_luxury_1784722577043.jpg",
    usage: "استخدمي الكريم بانتظام على بشرة نظيفة نهاراً. استخدمي واقي الشمس لأفضل النتائج.",
    size: "30g",
    origin: "الأردن"
  },

  // ===== SKIN CARE - ACNE TREATMENT =====
  {
    id: "skin-015",
    name: "كريم علاج حب الشباب - Acretin 0.025%",
    description: "كريم طبي من Jampoom Pharma يحتوي على Tretinoin 0.025% لعلاج حب الشباب المعتدل وتجديد خلايا البشرة. يُقلل الحبوب والرؤوس السوداء ويُحسن ملمس البشرة بالاستخدام المنتظم.",
    price: 45,
    category: "skin",
    emoji: "💉",
    image: "assets/products/لعلاج حب الشباب.png",
    usage: "يُستخدم ليلاً فقط على بشرة نظيفة وجافة. ابدئي بكمية صغيرة بحجم حبة البازلاء على كامل الوجه، وضعي واقي الشمس يومياً.",
    size: "30g",
    origin: "الأردن"
  },
  {
    id: "skin-016",
    name: "كريم علاج حب الشباب - Acretin 0.05%",
    description: "نسخة أقوى من Acretin بتركيز Tretinoin 0.05% لعلاج حب الشباب الحديث وتجديد خلايا البشرة بشكل أسرع. يُقلل التصبغات والبقع الداكنة ويُوحد لون البشرة.",
    price: 48,
    category: "skin",
    emoji: "💊",
    image: "assets/products/Gemini_Generated_Image_tk4id1tk4id1tk4i.png",
    usage: "يُستخدم ليلاً فقط على بشرة نظيفة وجافة. ابدئي بمرة كل يومين وزيدي تدريجياً. قد يسبب جفافاً في البداية وهذا طبيعي. استخدمي واقي الشمس يومياً.",
    size: "30g",
    origin: "الأردن"
  },
  {
    id: "skin-017",
    name: "جل علاج حب الشباب - Adapalene 0.1%",
    description: "جل طبي بتركيبة Adapalene 0.1% فعّالة لعلاج حب الشباب الالتهابي وغير الالتهابي. يُنظم تجدد خلايا البشرة، يُقلل الاحمرار ويمنع ظهور حبوب جديدة.",
    price: 42,
    category: "skin",
    emoji: "🧫",
    image: "assets/products/Gemini_Generated_Image_1sui3n1sui3n1sui.png",
    usage: "ضعي طبقة رقيقة على المناطق المصابة ليلاً بعد التنظيف. ابدئي بمرة كل يومين وزيدي تدريجياً حسب تحمّل البشرة.",
    size: "30g",
    origin: "الأردن"
  },

  // ===== SKIN CARE - SCRUBS =====
  {
    id: "skin-018",
    name: "مقشر للوجه - Neutrogena Clear & Defend",
    description: "مقشر طبي من Neutrogena يحتوي على جزيئات تقشير دقيقة تزيل خلايا الجلد الميتة وتنظف المسام بعمق. يُخفف الحبوب ويمنح البشرة نضارة فورية.",
    price: 50,
    category: "skin",
    emoji: "🫧",
    image: "assets/products/مقشر للوجه جديد.png",
    usage: "ضعي كمية مناسبة على البشرة الرطبة ودلّكي بحركات دائرية لطيفة لمدة دقيقة، ثم اشطفي جيداً. استخدمي مرتين في الأسبوع.",
    size: "150ml",
    origin: "USA"
  },

  // ===== SKIN CARE - SOAPS =====
  {
    id: "skin-019",
    name: "صابون طبي - Fitt-Bar Medicated",
    description: "صابون طبي معتمد من Fitt-Bar يحتوي على مكوّنات فعّالة تُقلل من الحبوب وتُنظف البشرة بعمق. مناسب للبشرة الدهنية والمختلطة ومناطق ظهر حب الشباب.",
    price: 18,
    category: "skin",
    emoji: "🧼",
    image: "assets/products/Gemini_Generated_Image_ynesy1ynesy1ynes.png",
    usage: "استخدمي الصابون مرتين يومياً على البشرة الرطبة مع الماء الدافئ، ثم اشطفي جيداً. احرصي على ترطيب البشرة بعد كل غسلة.",
    size: "100g",
    origin: "فلسطين"
  },

  // ===== SKIN CARE - SUNSCREENS =====
  {
    id: "skin-020",
    name: "واقي شمس SPF 50+ - Dermactive Acti Solaire",
    description: "كريم واقٍ من الشمس ذائب القوام من Dermactive بعامل حماية SPF 50+ UVA/UVB. قوام حليبي ناعم يمتص سريعاً دون أثر أبيض، مناسب للاستخدام اليومي على الوجه والجسم.",
    price: 55,
    category: "skin",
    emoji: "☀️",
    image: "assets/products/Gemini_Generated_Image_j526dmj526dmj526.png",
    usage: "ضعي كمية سخية على الوجه والمناطق المكشوفة قبل 15 دقيقة من التعرض للشمس. أعيدي الوضع كل ساعتين.",
    size: "50ml",
    origin: "لبنان"
  },
  {
    id: "skin-021",
    name: "واقي شمس سائل - Celenes SPF 50+",
    description: "سائل واقٍ خفيف الوزن من Celenes by Sweden بعامل حماية SPF 50+ UVA/UVB مع مضادات أكسدة طبيعية. مناسب للبشرة الدهنية والمختلطة، يمنح حماية قصوى مع ملمس متواضع جداً.",
    price: 65,
    category: "skin",
    emoji: "🌤️",
    image: "assets/products/Gemini_Generated_Image_jv90u3jv90u3jv90.png",
    usage: "ضعي الواقي قبل 15 دقيقة من التعرض للشمس. أعيدي الوضع كل ساعتين أو بعد السباحة والتعرق.",
    size: "50ml",
    bestseller: true,
    origin: "السويد"
  },
  {
    id: "skin-022",
    name: "واقي شمس بيودرما - Bioderma Photoderm SPF 50+",
    description: "واقي شمس مائي الملمس من Bioderma Photoderm Aquafluide بعامل حماية SPF 50+ UVA/UVB. تركيبة خفيفة جداً كالماء، مناسبة للبشرة الحساسة، مقاوم للعرق والماء.",
    price: 85,
    category: "skin",
    emoji: "🌊",
    image: "assets/products/Gemini_Generated_Image_6ef4k66ef4k66ef4.png",
    usage: "ضعي كمية سخية قبل 20 دقيقة من التعرض للشمس. أعيدي الوضع بعد كل تعرض للماء أو بعد ساعتين.",
    size: "40ml",
    origin: "فرنسا"
  },
  {
    id: "skin-023",
    name: "واقي شمس لاروش - La Roche-Posay Anthelios SPF 50+",
    description: "واقي شمس خفيف الوزن من La Roche-Posay Anthelios UVMune 400 بتقنية حماية من الأشعة UVA Ultra-Longs. مقاوم للماء والعرق، مناسب للبشرة الحساسة، خالٍ من العطور.",
    price: 90,
    category: "skin",
    emoji: "🛡️",
    image: "assets/products/laroche_posay_luxury_1784722437169.jpg",
    usage: "ضعي واقي الشمس قبل التعرض للشمس بـ 20 دقيقة. أعيدي الوضع كل ساعتين أو بعد السباحة. حتى لو كنتِ في مظلة فلا تستغني عنه!",
    size: "50ml",
    bestseller: true,
    origin: "فرنسا"
  },
  {
    id: "skin-024",
    name: "واقي شمس فيتامين C SPF 50",
    description: "واقي شمس مرطب بتركيبة فيتامين C من Hydrating Sunscreen Fluid بعامل حماية SPF 50 UVA/UVB. يرطب البشرة ويحميها في آنٍ واحد، لا يترك أثراً دهنياً ولا يسدّ المسام، ومختبَر جلدياً.",
    price: 50,
    category: "skin",
    emoji: "🍊",
    image: "assets/products/Gemini_Generated_Image_pojqlwpojqlwpojq.png",
    usage: "ضعي واقي الشمس قبل التعرض للشمس بـ 15 دقيقة وأعيدي وضعه كل ساعتين. خالٍ من البارابين، مناسب لجميع أنواع البشرة.",
    size: "50ml",
    origin: "إسرائيل"
  },

  // ===== VITAMINS & SUPPLEMENTS =====
  {
    id: "vit-001",
    name: "كيو تن 100mg - Limitless CoQ10",
    description: "مكمل غذائي راقٍ من Limitless Naturals يحتوي على CoQ10 100mg مع السيلينيوم وفيتامين E. يدعم صحة القلب، ينشط إنتاج الطاقة الخلوية، ويعمل كمضاد أكسدة قوي يحارب الشيخوخة المبكرة.",
    price: 75,
    category: "vitamins",
    emoji: "❤️",
    image: "assets/products/فيتامين1.png",
    usage: "تناولي كبسولة واحدة يومياً مع وجبة دسمة للحصول على أفضل امتصاص.",
    size: "30 كبسولة هلامية",
    origin: "الأردن"
  },
  {
    id: "vit-002",
    name: "فيتامينات للمرأة - Limitless Woman Max",
    description: "مكمل غذائي نسائي شامل من Limitless Naturals يحتوي على 26 عنصراً أساسياً من الفيتامينات والمعادن. يُحافظ على الصحة العامة، يعزز المظهر الخارجي، ويدعم الطاقة اليومية للمرأة.",
    price: 65,
    category: "vitamins",
    emoji: "👩",
    image: "assets/products/فيتامين5.png",
    usage: "تناولي قرصاً واحداً يومياً مع الوجبة.",
    size: "30 قرص",
    bestseller: true,
    origin: "الأردن"
  },
  {
    id: "vit-003",
    name: "فيتامينات متعددة - Limitless Man Max",
    description: "مكمل غذائي متكامل من Limitless Naturals للرجال يحتوي على 27 فيتامين ومعدن أساسي. يساعد في الحفاظ على الصحة والحيوية والطاقة اليومية.",
    price: 60,
    category: "vitamins",
    emoji: "💪",
    image: "assets/products/فيتامين3.png",
    usage: "تناول قرصاً واحداً يومياً مع الوجبة.",
    size: "30 قرص",
    origin: "الأردن"
  },
  {
    id: "vit-004",
    name: "فيتامينات للرجال - Limitless Man 90 كبسولة",
    description: "مكمل غذائي يومي من Limitless Naturals للرجال يحتوي على 20 عنصراً من الفيتامينات والمعادن، بتغطية 90 يوماً. يدعم صحة الدماغ والطاقة والأداء اليومي.",
    price: 85,
    category: "vitamins",
    emoji: "🧠",
    image: "assets/products/فيتامين4.png",
    usage: "تناول كبسولة واحدة يومياً مع الوجبة.",
    size: "90 كبسولة",
    origin: "الأردن"
  },
  {
    id: "vit-005",
    name: "بور ماكس للرجال - Limitless Power Max",
    description: "مكمل غذائي خاص بالرجال من Limitless Naturals يحتوي على مزيج طبيعي من 3 مستخلصات عشبية قوية مع الزنك. يدعم مستويات الطاقة الطبيعية ويعزز الحيوية.",
    price: 80,
    category: "vitamins",
    emoji: "⚡",
    image: "assets/products/فيتامين2.png",
    usage: "تناول قرصاً واحداً يومياً مع وجبة.",
    size: "30 قرص",
    origin: "الأردن"
  },
  {
    id: "vit-006",
    name: "فيتامين D3 50,000 وحدة - NOW",
    description: "فيتامين D3 عالي القوة من NOW Foods بجرعة 50,000 وحدة دولية. يدعم صحة العظام والمناعة، يحافظ على صحة الأسنان ويعزز قوة العضلات. غير معدّل وراثياً (Non-GMO).",
    price: 55,
    category: "vitamins",
    emoji: "🦴",
    image: "assets/products/فيتامين6.png",
    usage: "تناولي كبسولة هلامية واحدة مرة في الأسبوع أو حسب توصية الطبيب. لا تتجاوزي الجرعة الموصى بها دون استشارة طبية.",
    size: "50 كبسولة هلامية",
    origin: "USA"
  },
  {
    id: "vit-007",
    name: "C زنك - فيتامين C + زنك",
    description: "مكمل غذائي يجمع بين فيتامين C 250mg والزنك 30mg في كبسولة واحدة. يدعم مقاومة الجهاز المناعي، يساعد في الشفاء السريع من نزلات البرد ويحمي الخلايا من الأكسدة.",
    price: 30,
    category: "vitamins",
    emoji: "🛡️",
    image: "assets/products/فيتامين7.png",
    usage: "تناولي كبسولة واحدة يومياً مع الوجبة. مناسب للوقاية من نزلات البرد والإنفلونزا خاصة في فصل الشتاء.",
    size: "30 كبسولة",
    origin: "فلسطين"
  },

  // ===== HAIR CARE =====
  {
    id: "hair-001",
    name: "كريم كيراتين 2in1 - Elone",
    description: "كريم العناية المتكاملة من Elone بتركيبة كيراتين متحلل. يُصلح الشعر التالف والمتقصف من الجذور حتى الأطراف، يرطب بعمق ويمنح نعومة حريرية. خالٍ من الكحول والبارابين، مناسب لجميع أنواع الشعر.",
    price: 55,
    category: "hair",
    emoji: "💇",
    image: "assets/products/Gemini_Generated_Image_kbrdbvkbrdbvkbrd.png",
    usage: "لأفضل النتائج، استخدمي الكريم بانتظام بعد غسل الشعر مع التركيز على الأطراف. العناية المستمرة سر شعر صحي وجميل!",
    size: "30g",
    bestseller: true,
    origin: "الأردن"
  }
];

// Export for use in other scripts
if (typeof module !== 'undefined') {
  module.exports = { products };
}
