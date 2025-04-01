document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const productCards = document.querySelectorAll(".product-card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close");
    const nextBtn = document.getElementById("nextPage");
    const prevBtn = document.getElementById("prevPage");
    
    let currentPage = 1;
    const itemsPerPage = 6;

    // Search Functionality
    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();
        productCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchText) ? "block" : "none";
        });
    });

    // Lightbox Feature
    productCards.forEach(card => {
        card.addEventListener("click", function () {
            const imgSrc = card.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Pagination Logic
    function showPage(page) {
        const items = document.querySelectorAll(".product-card");
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = index >= start && index < end ? "block" : "none";
        });
    }

    nextBtn.addEventListener("click", function () {
        currentPage++;
        showPage(currentPage);
    });

    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    showPage(currentPage); // Initial call to show first page
});
