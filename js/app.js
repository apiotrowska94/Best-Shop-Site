const menu = document.querySelector(".page-menu-list");
const btn = document.querySelector(".burger");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("show");

});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.classList.toggle("cross");

});