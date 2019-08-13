const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}


function toggleActive(e) {
    //console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

// it will fire the toggleOpen function when clicked and the function will run classList.toggle for "open" class
panels.forEach(panel => panel.addEventListener("click", toggleOpen)); 

// when the transition finish, toggleActive function will run and it will "toggle" for open-active class
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
