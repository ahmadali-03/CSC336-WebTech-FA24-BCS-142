document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const searchInput = document.getElementById("searchInput");
  const sortBtn = document.getElementById("sortBtn");
  const productGrid = document.getElementById("productGrid");
  const noProductsMsg = document.getElementById("noProductsMsg");

  // --- 1. PREMIUM LABEL (N * 100 = 42 * 100 = 4200) ---
  products.forEach(function (product) {
    const price = parseInt(product.getAttribute("data-price"));
    if (price > 4200) {
      const brandDiv = product.querySelector(".product-brand");
      const premiumSpan = document.createElement("span");
      premiumSpan.textContent = "Premium";
      premiumSpan.style.color = "#fff";
      premiumSpan.style.backgroundColor = "hsl(294, 70%, 45%)"; // Accent color H
      premiumSpan.style.fontSize = "10px";
      premiumSpan.style.padding = "2px 5px";
      premiumSpan.style.marginLeft = "5px";
      premiumSpan.style.borderRadius = "3px";
      brandDiv.appendChild(premiumSpan);
    }
  });

  // --- 2. LIVE SEARCH ---
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    let visibleCount = 0;

    products.forEach(function (product) {
      const name = product.getAttribute("data-name");
      if (name.includes(searchTerm)) {
        product.classList.remove("d-none");
        visibleCount++;
      } else {
        product.classList.add("d-none");
      }
    });

    // Show message if no products match
    if (visibleCount === 0) {
      noProductsMsg.classList.remove("d-none");
      productGrid.classList.add("d-none");
    } else {
      noProductsMsg.classList.add("d-none");
      productGrid.classList.remove("d-none");
    }
  });

  // --- 3. SORT BY PRICE ---
  let isAscending = true;

  sortBtn.addEventListener("click", function () {
    const productArray = Array.from(products);

    productArray.sort(function (a, b) {
      const priceA = parseInt(a.getAttribute("data-price"));
      const priceB = parseInt(b.getAttribute("data-price"));
      return isAscending ? priceA - priceB : priceB - priceA;
    });

    // Move elements in the DOM without rewriting innerHTML
    productArray.forEach(function (product) {
      productGrid.appendChild(product);
    });

    // Toggle button state
    isAscending = !isAscending;
    sortBtn.textContent = isAscending
      ? "Sort: Low to High"
      : "Sort: High to Low";
  });
});
