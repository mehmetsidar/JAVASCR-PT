// "search-form", "cart-items-container" ve "navbar" sınıfına sahip öğeleri seç
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// "search-btn", "cart-btn" ve "menu-btn" kimliğine sahip öğeleri seç
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

//! Butonlar
// Arama butonuna tıklama olayı dinleyicisi ekle
searchBtn.addEventListener("click", function () {
  // Arama butonuna tıklandığında arama formuna "active" sınıfını ekle veya kaldır
  searchForm.classList.toggle("active");

  // Belgeye tıklama olayı dinleyicisi ekle
  document.addEventListener("click", function (e) {
    // Eğer tıklanan öğe arama butonu veya arama formu değilse, arama formundan "active" sınıfını kaldır
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

// Sepet butonuna tıklama olayı dinleyicisi ekle
cartBtn.addEventListener("click", function () {
  // Sepet butonuna tıklandığında sepet öğesine "active" sınıfını ekle veya kaldır
  cartItem.classList.toggle("active");

  // Belgeye tıklama olayı dinleyicisi ekle
  document.addEventListener("click", function (e) {
    // Eğer tıklanan öğe sepet butonu veya sepet öğesi değilse, sepet öğesinden "active" sınıfını kaldır
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

// Menü butonuna tıklama olayı dinleyicisi ekle
menuBtn.addEventListener("click", function () {
  // Menü butonuna tıklandığında menü öğesine "active" sınıfını ekle veya kaldır
  navbar.classList.toggle("active");

  // Belgeye tıklama olayı dinleyicisi ekle
  document.addEventListener("click", function (e) {
    // Eğer tıklanan öğe menü butonu veya menü öğesi değilse, menü öğesinden "active" sınıfını kaldır
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
