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
        localStorage.setItem('dark-mode', 'enabled');
    }else{

        document.getElementById("dmode").className = "fa fa-moon-o";
        localStorage.setItem('dark-mode', 'disabled');
    };
};
if(localStorage.getItem('dark-mode') == 'enabled'){
    document.body.classList.toggle('dark-mode');
    document.getElementById("dmode").classList.toggle('active');
}

// localStorage.removeItem('darkMode');
// localStorage.clear(); //The syntax for removing all the localStorage items

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




// projects page js
const projectContainer = document.getElementById("projectcontainer");
const projectCard = [
    {
        id: 1,
        projectTitle: "To-do App",
        projectImage: "../images/Projects/todo.png",
        projectLink: "https://michaeldouglasvg.github.io/todo-list.com/",
        projectCartegory: "Web Site",
        projectSize: "20MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "This was to keep the personal task that are yet to be done, and when done, you can mark and it will track your work",
    },
    {
        id: 1,
        projectTitle: "Web Template",
        projectImage: "../images/Projects/templates.png",
        projectLink: "https://michaeldouglasvg.github.io/prototype.com/",
        projectCartegory: "Web Site",
        projectSize: "70MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "HTML5",
        langTwo: "CSS3",
        projectDesc: "Build as a free template to help those in need of using webtemplates to create their own site, modify and deploy",
    },
    {
        id: 1,
        projectTitle: "Main Website",
        projectImage: "../images/Projects/web.png",
        projectLink: "https://michaeldouglasvg.github.io/web.com/",
        projectCartegory: "Web Site",
        projectSize: "30MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "Was my main webpage that people may find time to learn more about my programming skills and much more",
    },
];
function displayProjects(items){

    let contents = items.map(function(singleProject){
        
        return `
            <div class="projects__main-card">
            <div class="projects__image-link">
                <p>${singleProject.projectTitle}</p>
                <img src=${singleProject.projectImage} alt="project image" height="100px">
                <div class="info">
                    <a href="" class="language">Language used <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i></a>
                    <a href="${singleProject.projectLink}"><i class="fa fa-link"></i></a>
                </div>
            </div>
            <div class="projects__project-description cardback">
            <div class="top">
                <div class="left">
                    <p>Category: ${singleProject.projectCartegory}</p>
                    <p>Size: ${singleProject.projectSize}</p>
                    <p>Deployed on: ${singleProject.hostedOn}</p>
                </div>
                <div class="right">
                    <h1>Languages</h1>
                    <span>
                        <p>${singleProject.langOne}</p>
                        <p>${singleProject.langTwo}</p>
                        <p>${singleProject.langThree}</p>
                    </span>
                </div>
            </div>
            <p>${singleProject.projectDesc}</p>
                <div class="bottom">
                    <i class="fa fa-chevron-left backpress"> Back</i>
                    <a href="">Link<i class="fa fa-link"></i></a>
                </div>
            </div>
        </div>
        `;
    })

    contents = contents.join("");

    projectContainer.innerHTML = contents;
}



// services container
const serviveCard = document.getElementById('serviceContainer');
const singleCard = [
    {
        id: 1,
        serviceImage: "../images/services/tensor.jpg",
        serviceDesc: "Using tensorflow to impliment Nueral networks and deep learning programming in order to advance the artificial intelligence feautures to solve the real world problems",
        serviceCall: "tel:+254712176534",
        serviceEmail: "mailto:douglas1999michael@gmail.com?Subject:Requesting your service for tensorflow to solve my work",
    },
    {
        id: 1,
        serviceImage: "../images/services/appa.jpg",
        serviceDesc: "I use flutter for app development since it is a crossplatform functionality, is light weight and easy to learn to develope applicationa and deploy",
        serviceCall: "tel:+254712176534",
        serviceEmail: "mailto:douglas1999michael@gmail.com?Subject:Use flutter of Kotlin to make an app for me",
    },
    {
        id: 1,
        serviceImage: "../images/services/git.png",
        serviceDesc: "Proving web technology services like pull, push, deploying site and maintainance. Creating different modules to solve different real world problems",
        serviceCall: "tel:+254712176534",
        serviceEmail: "mailto:douglas1999michael@gmail.com?Subject:Requesting your web development services",
    },
];
function displayServices(service){

    let services = service.map(function(singleService){
        
        return `
        <div class="services__card-container">
            <img src=${singleService.serviceImage} alt="service imsge" height="100px">
            <p class="servicedescription">${singleService.serviceDesc}</p>
            <div class="contact">
                <a href="${singleService.serviceCall}"><i class="fa fa-phone"></i>Call</a>
                <a href="${singleService.serviceEmail}"><i class="fa fa-envelope"></i>Request Service</a>
            </div>
        </div>
        `;
    })

    services = services.join("");

    serviveCard.innerHTML = services;
}


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


document.getElementById("formconfirm").textContent = "By Pressing the send button, you agree to the terms and policies under GtechAmour developers. Cancel by resetting the form.";

// loading the different kinds of modules
window.addEventListener("DOMContentLoaded", function(){
    displayLanguages(lanImages);
    displayProjects(projectCard);
    displayServices(singleCard);
});