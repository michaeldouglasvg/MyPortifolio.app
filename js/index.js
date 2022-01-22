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

// time management

function displayTime(){

    let dateTime = new Date();

    let hr = dateTime.getHours();

    let mit = dateTime.getMinutes();

    let sec = dateTime.getSeconds();

    const sess = document.getElementById("session");

    if(hr >= 12){

        sess.textContent = "Hrs";
        sess.style.color = "orange";
      

    }else{

        sess.textContent = "Hrs";
        sess.style.color = "green";

    }

    document.querySelector(".hour").textContent = hr;
    document.querySelector(".minute").textContent = mit;
    document.querySelector(".counter").textContent = sec;

}

setInterval(displayTime, 10);