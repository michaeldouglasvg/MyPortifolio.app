function myInfor(){
    alert("Hi, Am Michael Douglas. Build this portifolio in basis of HTML5, CSS3, JS and Libraries");
}

// navigation section
function showMenu(){

    const menu = document.getElementById("toggle");

    if(menu.style.display == "none"){

        menu.style.display = "block";

    }else{

        menu.style.display = "none";
    }
}