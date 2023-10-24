var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".side_bar");
var container = document.querySelector(".container");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small_sidebar");
    container.classList.toggle("large_container");

}
