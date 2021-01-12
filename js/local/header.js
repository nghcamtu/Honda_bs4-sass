const headerHamburger= document.getElementById("header__hamburger");
let menuOpen= false;

headerHamburger.addEventListener("click", function(){
    if(!menuOpen){
        headerHamburger.classList.add("open");
        menuOpen=true;
    }
    else{
        headerHamburger.classList.remove("open");
        menuOpen=false;
    }
});