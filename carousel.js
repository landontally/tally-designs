
window.onload = function() {
    var items = document.querySelectorAll(".item");
    var carousel = document.querySelector(".carousel-accordion");
    
    items.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            var hoverImage = this.getAttribute("data-hover-image");
            carousel.style.backgroundImage = 'url(' + hoverImage + ')';
        });
        item.addEventListener("mouseout", function() {
            carousel.style.backgroundImage = 'url(./img/slide4.jpg)'; // Set this to the default image
        });
    });
};