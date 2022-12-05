document.querySelector(".banners-close").addEventListener('click', function() {
   this.closest(".banners").remove();
});



let navbar = document.querySelector(".navbar");
window.addEventListener('scroll', function() {
   if (window.scrollY > 100) {
   	navbar.classList.add('bg-dark');
   } else {
   	navbar.classList.remove('bg-dark');
   }
});



let arrowin = document.querySelector('#arrowin');
window.addEventListener("click", function () {
   window.scrollTo(0, 0);
});



let popup = document.getElementById("popup");

function openPopup() {
   popup.classList.add("open-pop");
}

function closePopup() {
   popup.classList.remove("open-pop");
}