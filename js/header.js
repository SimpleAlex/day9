var pagetop, menu, yPos;

function yScroll() {
   pagetop = document.getElementById('pagetop');
   menu = document.getElementById('menu');
   yPos = window.pageYOffset;
   if (yPos > 100) {
     pagetop.style.height = "36px";
     pagetop.style.paddingTop = "8px";
      pagetop.style.marginTop = "0px";
     menu.style.height = "0px";
   } else {
     pagetop.style.height = "120px";
     pagetop.style.paddingTop = "50px";
     pagetop.style.marginTop = "300px";
     menu.style.height = "50px";
   }
}
window.addEventListener("scroll", yScroll);
