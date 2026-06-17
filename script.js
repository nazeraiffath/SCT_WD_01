window.addEventListener("scroll", () => {

let nav = document.querySelector("nav");

if(window.scrollY > 50){
    nav.style.background = "#1d4ed8";
}
else{
    nav.style.background = "#2563eb";
}

});