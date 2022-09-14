const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
const items = document.querySelectorAll(".nav-item");

/* Toggle mobile menu */
function toggleMenu(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else{
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event listener */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items){
    if (item.querySelector(".submenu")){
        item.addEventListener("click", toggleItem, false);
    }
        item.addEventListener("keypress", toggleItem, false);
    }
document.addEventListener("click", closeSubmenu, false);

document.querySelector('#submit').addEventListener('onclick', myFunction )

function myFunction() {
    alert("Your request has been submitted, be on the lookout for an email to complete your purchase!")
}