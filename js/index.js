// preloader
const myLoader = document.querySelector(".loader");

window.addEventListener("load", function(){
    myLoader.classList.add("hideloader");
})


// navigation scroll events
// let mainScrolldiv = document.getElementById("scroll");
// mainScrolldiv.addEventListener("scroll", event => {
   
//     let scroll = mainScrolldiv.scrollTop();

//     alert(scroll);
// })

// toggle dak mode
function darkMode(){
    // alert("Dark mode functionality is currently under implimentation, Will be functioning soon, Contact for more information")
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        document.getElementById("dmode").className = "fa fa-certificate";
        localStorage.setItem('dark-mode', 'enabled');
    }else{

        document.getElementById("dmode").className = "fa fa-moon-o";
        localStorage.setItem('dark-mode', 'disabled');
    };
};
if(localStorage.getItem('dark-mode') == 'enabled'){
    document.body.classList.toggle('dark-mode');
    document.getElementById("dmode").classList.toggle('dark-mode');
    document.getElementById("dmode").className = "fa fa-sun-o";
}else{
    document.getElementById("dmode").className = "fa fa-moon-o";
}

// localStorage.removeItem('darkMode');
// localStorage.clear(); //The syntax for removing all the localStorage items
// navigation section
function showMenu(){

    const menu = document.getElementById("toggle");

    if(menu.style.display == "none"){

        menu.style.display = "block";

    }else{

        menu.style.display = "none";
    }
}

// show media
function showMedia(){

   const elementMedia = document.getElementById("mediaLinks");
   
   if(elementMedia.classList.toggle("showlinks")){
       
    document.getElementById("mediaIcon").classList.add("flipchevronup");

   }else{

    document.getElementById("mediaIcon").classList.remove("flipchevronup");
    
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



// image FAQ pazzle
const faqContainer = document.querySelector(".toggle");
const faqQuizes = [
    {
        id: 1,
        h1: "Backend Development Technology",
        pExperience: "Experience of more than 2years",
        images: [
            {
                id: 1, 
                image: "../images/Languages/php.png",
            },
            {
                id: 2, 
                image: "../images/Languages/MySQL.png",
            },
            {
                id: 3, 
                image: "../images/Languages/laravel.png",
            },
            {
                id: 4, 
                image: "../images/Languages/python.png",
            },
        ],
    },
    {
        id: 2,
        h1: "Front end Development Technology",
        pExperience: "Experience of more than 3years",
        images: [
            {
                id: 1, 
                image: "../images/Languages/Vue.png",
            },
            {
                id: 2, 
                image: "../images/Languages/React.png",
            },
            {
                id: 3, 
                image: "../images/Languages/go.png",
            },
            {
                id: 4, 
                image: "../images/Languages/CSS.png",
            },
            {
                id: 5, 
                image: "../images/Languages/Angular.png",
            },
            {
                id: 6, 
                image: "../images/Languages/JavaScript.png",
            },
        ],
    },
    {
        id: 3,
        h1: "Mobile app Development Technology",
        pExperience: "Experience of more than 6months",
        images: [
            {
                id: 1, 
                image: "../images/Languages/C++.png",
            },
            {
                id: 2, 
                image: "../images/Languages/flutter.jpg",
            },
            {
                id: 3, 
                image: "../images/Languages/kotlin.jpg",
            },
            {
                id: 4, 
                image: "../images/Languages/React.png",
            },
        ],
    },
];

function showTechnologiesExperience(image){

    let expImageLanguage = image.map(function(faq){

        return `
        <span class="toggle">
            <div class="top-section experiencebtn">
                <h1 class="title">${faq.h1}</h1>
                <i class="fa fa-chevron-down"></i>
            </div>
            <div class="bottom-text expdisplay">
                <p>${faq.pExperience}</p>
                <div class="card-images">
                    <img src=${faq.images[0].image} alt="images" height="30px">
                    <img src=${faq.images[1].image} alt="images" height="30px">
                    <img src=${faq.images[2].image} alt="images" height="30px">
                    <img src=${faq.images[3].image} alt="images" height="30px">
                </div>
            </div>
         </span>
        `;
    });

    expImageLanguage = expImageLanguage.join("");
    faqContainer.innerHTML = expImageLanguage;

    const expBtn = document.querySelectorAll(".experiencebtn");

    expBtn.forEach(function(skill){

        skill.addEventListener("click", function(e){
            const currentelement = e.currentTarget.parentElement.querySelector(".expdisplay");
            currentelement.classList.toggle("show-text");
            e.currentTarget.parentElement.querySelector("i").classList.toggle("flipchevronup");

        });
    });
}
// end of FAQ
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
        id: 2,
        serviceImage: "../images/services/appa.jpg",
        serviceDesc: "I use flutter for app development since it is a crossplatform functionality, is light weight and easy to learn to develope applicationa and deploy",
        serviceCall: "tel:+254712176534",
        serviceEmail: "mailto:douglas1999michael@gmail.com?Subject:Use flutter of Kotlin to make an app for me",
    },
    {
        id: 3,
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



document.getElementById("formconfirm").textContent = "By Pressing the send button, you agree to the terms and policies under GtechAmour developers. Cancel by resetting the form.";

// loading the different kinds of modules
window.addEventListener("DOMContentLoaded", function(){
    displayLanguages(lanImages);
    displayProjects(projectCard);
    displayServices(singleCard);
    showTechnologiesExperience(faqQuizes);
});

const helpCenter = document.getElementById("helpcenter");
const btnHelpCent = document.querySelectorAll(".btncenter");
const displayHelpCent = document.querySelectorAll(".content");
function myInfor(){
    helpCenter.classList.toggle("showHelp");
}

helpCenter.addEventListener("click", function(e){
    e.preventDefault();
    const currentTarget = e.target.dataset.id;
    const currentbtn = e.target;

    if(currentTarget){
        // remove the avtive class for all of the buuttons
        btnHelpCent.forEach(function(helpBtn){

            helpBtn.classList.remove("active");
            currentbtn.classList.add("active");

        });

        // remove the active class for all the display divisions
        displayHelpCent.forEach(function(helpDisplay){

            helpDisplay.classList.remove("active");
        });
        
        const currentDisplay = document.getElementById(currentTarget);
        currentDisplay.classList.add("active");
    }
    
});

// help center js
const helpElement = document.getElementById("helpNavigation");
// navigation
const arrayNavigation = [
    {
        title: "Home page",
        text: "Header section: Traverse through the logo, navigation links and toggle theme. Theme applied is stored under local storage in your browser, meaning when you close your browser and upon opening it up again, the last recently used theme will apply as the current theme in action. Under home page, click Download CV to get access to my CV document, Upon clicking Hire me, it will direct you to the contact page...for where you will contact your service from."
    },
    {
        title: "Skills Page",
        text: "This page contaons the available language have learn and some mastered and others still getting in depth. The left side displays langugage in general, Click 'My Languages' to expand and see in details, The right hand side is a section that displays the Category, Click specific content and will open for you to see the languages that I apply in different areas to solve different technical problems",
    },
    {
        title: "Project page",
        text: "This page displays the available projects that have worked on and are successful, The card contains the project image as in real world, under the image Is the Icon that when you click it opens the project to a new window, for you to explore much on that specific project",
    },
    {
        title: "Service Page",
        text: "This page contains cards each having the image of the services for easy identification, Text that you can read for clarity and the bottom contact section on the same card, for syncronous contact Click the call Icon that will direct you through a voice call, and for asynchronous communication, on that doe not need immediate replies use Send mail and will be answered as long as is set. All the ways are acceptible while rewuesting my services",
    },
    {
        title: "Contact Page",
        text: "If you are in nned of knowing more about me in the background, use 'More info' section, View my location and other services provided there...except the call and email that will get your contact, For special contacts and rewuest please use 'Get Intouch' section, which we can communicate and fix your problem in real time. Thanks for visiting my site and services."
    },
];

function displayHelpGuide(item){

    let singleHelp = item.map(function(singleItemHelp){

        return`
            <h2 class="category">${singleItemHelp.title}</h2>
            <p>${singleItemHelp.text}</p>
        `;
    });

    singleHelp = singleHelp.join("");
    helpElement.innerHTML = singleHelp;
}

// terms
const helpElementTerms = document.getElementById("helpTerms");
const arrayTerms = [
    {
        title: "What I expect from you...",
        text: "To View my work, ask any question and it will get answered through your email by using the contact form, Suggest a better way to improve my products, Your concern, comment and suggestion will be hadnled appropriately. If you grind to a halt, am here to help you through solving technical problems. Learning and solving your problems in a unique way. For more your demands please use the contact form",
    },
    {
        title: "What you expext from me",
        text: "I develope software products that can solve real world problems in technology, I offer a variety of services across the technonoly fields such as Fullstack development, Machine learning and other tools like Linux systems, Git & GitHub push and pull request. Developing appplications using different languages since different problems must be solved with the available technology resources. To learn more please request the service you need me to offer and will confirm through your email. Only available if you can use the contact form.",
    },
    {
        title: "Know how your data is used",
        text: "Upon using the contact form, and other forms in my portifolio web page, For contact form, all the fields mentioned will appear through my email as you have contacted, Using other forms available in this portifolio like the one under navigation > send your feedback will only display your messaage and email incase there is need to reply to you. Other formal data like your Web suffing activvities will be stored localy on your machine or your browser history. I dont share your data, instead will be agreement between me and you as my client.",
    },
    {
        title: "What is contained in this portifolio",
        text: "First, is common to know that security is the best concern while dealing with your loyal customers, this links is much secure hosted in netlify database , your data is secure, The portifolio is still under development and thus I suggest you give time to things that are doing wrong on your side, will be fixed soon. As soon as the final version will be out, ypu will get notified only if I HAVE YOUR CONTACT DETAILS such as the Email address.",
    },   
];
function displayHelpTerms(item){

    let singleHelp = item.map(function(singleItemHelp){

        return`
            <h2 class="category">${singleItemHelp.title}</h2>
            <p>${singleItemHelp.text}</p>
        `;
    });

    singleHelp = singleHelp.join("");
    helpElementTerms.innerHTML = singleHelp;
}

// policies
const helpElementPolicies = document.getElementById("helpPolicies");
const arrayPolicies = [
    {
        title: "Information management",
        text: "Please, be specific with the question and information your share about yourself under this platform, do not provide unrelated information because it will be used as the key information to find your, provide my service and other technical issues. Use of false information as a customer will break the links and terms of service.",
    },
    
];
function displayHelpPolicies(item){

    let singleHelp = item.map(function(singleItemHelp){

        return`
            <h2 class="category">${singleItemHelp.title}</h2>
            <p>${singleItemHelp.text}</p>
        `;
    });

    singleHelp = singleHelp.join("");
    helpElementPolicies.innerHTML = singleHelp;
}

window.addEventListener("DOMContentLoaded", function(){
    displayHelpGuide(arrayNavigation);
    displayHelpTerms(arrayTerms);
    displayHelpPolicies(arrayPolicies);
});
