document.querySelector(".banners-close").addEventListener('click', function() {
   this.closest(".banners").remove();
});

window.addEventListener('scroll', function() {
 var navbar = document.querySelector('.navbar');
 navbar.classList.toggle('sticky', window.scrollY > 39);
 
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
