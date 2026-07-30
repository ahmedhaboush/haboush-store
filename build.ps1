# Compiles separate source files into a single preview HTML file
$htmlFile = Join-Path $PSScriptRoot "index.html"
$cssFile = Join-Path $PSScriptRoot "style.css"
$productsFile = Join-Path $PSScriptRoot "products.js"
$scriptFile = Join-Path $PSScriptRoot "script.js"
$previewFile = Join-Path $PSScriptRoot "haboosh-website-preview.html"

try {
    # Read files with UTF8 encoding to preserve Arabic text
    $html = [System.IO.File]::ReadAllText($htmlFile, [System.Text.Encoding]::UTF8)
    $css = [System.IO.File]::ReadAllText($cssFile, [System.Text.Encoding]::UTF8)
    $products = [System.IO.File]::ReadAllText($productsFile, [System.Text.Encoding]::UTF8)
    $script = [System.IO.File]::ReadAllText($scriptFile, [System.Text.Encoding]::UTF8)

    # Embed CSS
    $html = $html.Replace('<link rel="stylesheet" href="style.css" />', "<style>`n$css`n</style>")

    # Embed JS Files
    $html = $html.Replace('<script src="products.js"></script>', "<script>`n$products`n</script>")
    $html = $html.Replace('<script src="script.js"></script>', "<script>`n$script`n</script>")

    # Write compiled preview HTML with UTF8 encoding (with BOM for Windows compatibility)
    [System.IO.File]::WriteAllText($previewFile, $html, [System.Text.Encoding]::UTF8)
    
    Write-Host "Successfully compiled haboosh-website-preview.html!" -ForegroundColor Green
} catch {
    Write-Error "Build failed: $_"
}
