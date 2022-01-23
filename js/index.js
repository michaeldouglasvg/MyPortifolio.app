// toggle dak mode
function darkMode(){
    alert("Dark mode functionality is currently under implimentation, Will be functioning soon, Contact for more information")
}


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

// home page js
const homeMessage = document.getElementById("mymessage");
homeMessage.textContent = "Hi, am a student at South Easter Kenya University. Pursuing Computer Science (CS), am optimized in technology. Providing optimum solutions to complex technical problems. Ready to learn and master from the solutions, and change in technology.";


// skills page
const skillspage = document.getElementById("skillpage");
skillspage.textContent = "Learning is one of my favorite to provide possible solutions, Different languages I use provides different solutions for different problems. Rapid change in technology requires practice and much more to master step by step. Here are some of my skills learning and mastering them is what is do";

// projects page js
const projectPage = document.getElementById("project");
console.log(projectPage.getElementsByTagName("p"));

const btnShow = document.querySelectorAll(".language");
const cardimage = document.querySelectorAll(".imagescards");
const btnback = document.querySelectorAll(".backpress");
const cardback = document.querySelectorAll(".cardback");

btnShow.forEach(function(btnsingle){

    btnsingle.addEventListener("click", function(e){
        e.preventDefault();
        alert("hello")
    });

});
