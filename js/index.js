// preloader
const myLoader = document.querySelector(".loader");

window.addEventListener("load", function(){
    myLoader.classList.add("hideloader");
})




// toggle dak mode
function darkMode(){
    // alert("Dark mode functionality is currently under implimentation, Will be functioning soon, Contact for more information")
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        document.getElementById("dmode").className = "fa fa-sun-o";

    }else{

        document.getElementById("dmode").className = "fa fa-moon-o";
    };
};


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



// cv download functionality
function cvdownload(){
    alert("Oops, The CV you want to download is not yet uploaded, please use contact form and you will get the notification through your email, when it is uploaded. Thanks for your kindness. Terms and condition applied.")
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

const btnshowlanguages = document.getElementById("showlanguage");
const lanIcon = document.querySelector(".lanicons");
const langcontainer = document.querySelector(".lanimages");


btnshowlanguages.addEventListener("click", function(){

    document.getElementById("lantitle").classList.toggle("changecolor");
    lanIcon.classList.toggle("flipchevronup");
    langcontainer.classList.toggle("lanimages");

});


const expBtn = document.querySelectorAll(".experiencebtn");

expBtn.forEach(function(skill){

    skill.addEventListener("click", function(e){

        e.preventDefault();

        const currentelement = e.currentTarget.parentElement.querySelector(".expdisplay");

        if(currentelement.style.display == "none"){

            currentelement.style.display = "block";
            e.currentTarget.parentElement.querySelector("i").classList.toggle("flipchevronup");

        }else{

            currentelement.style.display = "none";
            e.currentTarget.parentElement.querySelector("i").classList.remove("flipchevronup");
        }

    });
});



// languages image autoloader/ dynamics
const lanImages = [
    {
        id: 1,
        image: "../images/Languages/python.png",
        langname: "Python",
    },
    {
        id: 2,
        image: "../images/Languages/JavaScript.png",
        langname: "JavaScript",
    },
    {
        id: 3,
        image: "../images/Languages/php.png",
        langname: "PHP",
    },
    {
        id: 4,
        image: "../images/Languages/MySQL.png",
        langname: "MySQL",
    },
    {
        id: 5,
        image: "../images/Languages/laravel.png",
        langname: "Laravel",
    },
    {
        id: 6,
        image: "../images/Languages/Angular.png",
        langname: "Angular",
    },
    {
        id: 7,
        image: "../images/Languages/Vue.png",
        langname: "Vue",
    },
    {
        id: 8,
        image: "../images/Languages/React.png",
        langname: "React",
    },
    {
        id: 9,
        image: "../images/Languages/C++.png",
        langname: "C++",
    },
    {
        id: 10,
        image: "../images/Languages/flutter.jpg",
        langname: "Flutter",
    },
    {
        id: 11,
        image: "../images/Languages/go.png",
        langname: "Go lang",
    },
    {
        id: 12,
        image: "../images/Languages/kotlin.jpg",
        langname: "Kotlin",
    },
    {
        id: 13,
        image: "../images/Languages/CSS.png",
        langname: "CSS",
    },
];

window.addEventListener("DOMContentLoaded", function(){
    displayLanguages(lanImages);
});

function displayLanguages(item){

    let elements = item.map(function(singleImage){
        
        return `
        <span class="card">
            <img src=${singleImage.image} alt="language image" height="40px">
            <p>${singleImage.langname}</p>
        </span>
        `;
    })

    elements = elements.join("");

    langcontainer.innerHTML = elements;
}
// expBtn.forEach(function(btnexp){

//     btnexp.addEventListener("click", function(e){

       
//     })
// })



// projects page js
const projectPage = document.getElementById("project");
const btnShow = document.querySelectorAll(".language");
const cardimage = document.querySelectorAll(".imagescards");
const btnback = document.querySelectorAll(".backpress");
const cardback = document.querySelectorAll(".cardback");

// btnShow.forEach(function(btnsingle){

//     btnsingle.addEventListener("click", function(e){
//         e.preventDefault();
//         alert("hello")
//     });

// });




// contact js
const contactguide = document.getElementById("contactdes");
contactguide.textContent = "Are you in need to know to technical status, please visit the more information section, for further follow up you can use contact form, Please enter your valid details that can be used to reach to you incase of any reply or comment. Thanks for visitting my site"
;


// media js

const mediaElement = document.getElementById("media");
mediaElement.addEventListener("click", function(e){
    e.preventDefault();

    alert("Hello, Gtechamour socialmedia platforms data is not yet ready, please contact for more information. Wen it will be out your will get notified. Please stay intouch for more from GtechAmout Technologies. Goodbye");

});


document.getElementById("formconfirm").textContent = "By Pressing the send button, you agree to the terms and policies under GtechAmour developers. Cancel by resetting the form."