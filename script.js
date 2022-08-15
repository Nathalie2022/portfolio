const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll=function(){
    if(window.pageYOffset>200){
        scrollTopButton.classList.add("show")
    }

    else{
        scrollTopButton.classList.remove("show")
    }
}

const navbar = document.getElementById("navbarSite");

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-transparent");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("bg-light");
        navbar.classList.add("navbar-light");
    }
    else{
        navbar.classList.add("bg-transparent");
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("bg-light")
        navbar.classList.remove("navbar-light")
    }
}