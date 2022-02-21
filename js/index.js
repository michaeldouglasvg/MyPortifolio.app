// preloader
const myLoader = document.querySelector(".loader");

window.addEventListener("load", function(){
    myLoader.classList.add("hideloader");
});

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

// home image maximize
function showImage(){
    document.getElementById("imageZoom").classList.add("showHomeImage");

    const close = document.getElementById("clodeHomeImage");

    close.addEventListener("click", function(){

        document.getElementById("imageZoom").classList.remove("showHomeImage");
    })
}

// header scroll effects
const navBar = document.getElementById("head");
const scrollBtn = document.querySelector(".topscroll");
const smNavBar = document.getElementById("windowMenu");
window.addEventListener("scroll", function(){

    const scrollEffect = this.window.scrollY;

    if(scrollEffect > 100){

        navBar.classList.add("sticky-nav");
    }else{

        navBar.classList.remove("sticky-nav");
    } 

    if(scrollEffect > 400){

       scrollBtn.classList.add("showup");
    }else{

        scrollBtn.classList.remove("showup");
    }

    if(scrollEffect > 300){

        smNavBar.classList.add("windowHide");
    }else{

        smNavBar.classList.remove("windowHide");
    }
})

scrollBtn.addEventListener("click", function(e){
    e.preventDefault();

    alert("Oops!!! this button is not functioning at the moment, I suggest you manually scroll to your page of interest, The algorithm of the button is under programming, Thanks for your KINDNESS, Goodbye.");

});
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
    alert("Oops!!! the document is being updated, will be out soon for download, The document will consist up-to-date information. Keep browsing the website to get new features. Thanks for your support.");
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
homeMessage.textContent = "Hi, am a student at South Easter Kenya University. At 22, Learning Computer Science (CS) to advanced level, I optimize my productivity in technology. Providing optimum solutions to complex technical problems. Ready to learn and master from the complex problems rational to their own unique solutions. Ready to work with anyone to advance my skills and solve technical problems together. To learn and advance is my opportunity.";




// skills page
const skillspage = document.getElementById("skillpage");
skillspage.textContent = "Learning different technologies, practicing day by day, putting it to more advanced practice through group works as a leader, managing small individuals that are ready to solve the real world problems is what I do at community level. Helping one when stuck to solve a technical problems. Using HTML, JavaScripts and its framework, PHP for server side scripting and Python for tensor flow model implimentation and training. The technical skills are as shown below, Some learning to advanced level and some intermediate also some as a begginer. Technology curve compared to market flux is demanding, My pleasure to learn new technical skills  to advanced level to help people.";

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
        pExperience: "Experience of more than 11/2years",
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
        projectTitle: "React to-do app",
        projectImage: "../images/Projects/todos.png",
        projectLink: "https://maintodo-appgtech.netlify.app",
        projectCartegory: "Web Site",
        projectSize: "20MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "Is a web based application to track your daily tasks, Complited, uncomplited and also you can delete task",
    },
    {
        id: 2,
        projectTitle: "Free portifolio template",
        projectImage: "../images/Projects/template.png",
        projectLink: "https://portifoliotemplate.netlify.app",
        projectCartegory: "Web Site",
        projectSize: "70MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "HTML5",
        langTwo: "CSS3",
        projectDesc: "Build as a free template to help those in need of using webtemplates to create their own site, modify and deploy",
    },
    {
        id: 3,
        projectTitle: "At Makeitperfect.com",
        projectImage: "../images/Projects/React.png",
        projectLink: "https://michaeldouglasvg.github.io/web.com/",
        projectCartegory: "Web Site",
        projectSize: "30MBs",
        hostedOn: "Github",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "Web based application to show my skill level, interracting with people and learning more from my work and technologies",
    },
    {
        id: 4,
        projectTitle: "Admin dashboard",
        projectImage: "../images/Projects/admin.png",
        projectLink: "https://commerceadmin.netlify.app",
        projectCartegory: "Web Site",
        projectSize: "23MBs",
        hostedOn: "Netlify",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "Admin web page that is customized to display all the work and data from the fronten-end website, you can customize the tepmlate to suit the work you need",
    },
    {
        id: 5,
        projectTitle: "Counter Project",
        projectImage: "../images/Projects/counter.png",
        projectLink: "https://setcounter.netlify.app",
        projectCartegory: "Web Site",
        projectSize: "10MBs",
        hostedOn: "Netlify",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "Build with the basis of HTML5, CSS and JavaScript, the idea was to bring the logic of counting in practice by using some sets of arithmetic operators",
    },
    {
        id: 6,
        projectTitle: "Manage FAQs in Webpages",
        projectImage: "../images/Projects/faq.png",
        projectLink: "https://faqquizes.netlify.app",
        projectCartegory: "Web Site",
        projectSize: "10MBs",
        hostedOn: "Netlify",
        langone: "JavaScript",
        langTwo: "PHP",
        langThree: "MySQL",
        projectDesc: "The idea was to make a well managable area to set the website user FAQs so as to utilize the space for rendering the website layout",
    },
];
function displayProjects(items){

    let contents = items.map(function(singleProject){
        
        return `
            <div class="projects__main-card" data-aos="fade-up">
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
        <div class="services__card-container" data-aos="fade-up">
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
contactguide.textContent = "Have created the possible solution for you to learn more from me, or get intouch incase you have any issue that need to be solved. The 'More info' section, use this area to explore much regarding my details such as location, website, write emails and direct call is allowed if in need of point-to-point communication. The 'Get Intouch' section is a form that you may need to use for contacting either to issue a comment or to get connected for approval of your requests. Please use your valid details incase of any feedback you can get through your contact information like the email address. You can chose to upload the file for more clarity or Ignore, this part is optional for all clients."
;

// contact for js



document.getElementById("formconfirm").textContent = "By pressing the send button, you agree that the information entered is valid, otherwise use 'Clear form' button to reset the form to default state.";

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
        text: "Header section: Traverse through the logo, navigation links and toggle theme. Theme applied is stored under local storage in your browser, meaning when you close your browser and upon opening it up again, the last recently used theme will apply as the current theme in action. Under home page, click Download CV to get access to my CV document {Under implementation}, Upon clicking Hire me, it will direct you to the contact page...for where you will contact your service from."
    },
    {
        title: "Right arrow (sociomedia)",
        text: "Toogle the arrow, located on your right hand side of the main window for more information about my social-media platforms. Click any Icon for accessing the services and requirements that it offers under that media categoty. Thanks for visiting my platforms.",
    },
    {
        title: "Skills Page",
        text: "This page contains the available language have learn and some mastered and others still getting in depth. The left side displays langugage in general, Click 'My Languages' to expand and see in details, The right hand side is a section that displays the Category, Click specific content and will open for you to see the languages that I apply in different areas to solve different technical problems",
    },
    {
        title: "Project page",
        text: "This page displays the available projects that have worked on and are successful, The card contains the project image as in real world interface, under the image is the icon that when you click it opens the project to a new window, for you to explore much on that specific project",
    },
    {
        title: "Service Page",
        text: "This page contains cards each having the image of the services for easy identification, Text that you can read for clarity and the bottom contact section on the same card, for synchronous / point-to-point contact Click the call icon that will direct you through a voice call, and for asynchronous communication, on that doe not need immediate replies use Send mail and will be answered as long as is set. All ways are acceptible while requesting my services",
    },
    {
        title: "Contact Page",
        text: "If you are in need to know more about me in the background, use 'More info' section, View my location and other services provided there...except the call and email that will get your data to reflect through my email eg:-Your email address, For special contacts and request please use 'Get Intouch' section, which we can communicate and fix your problem in real time. Visit the site for update informations, Enjoy new features.",
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
        text: "Upon using the contact form, and other forms in my portifolio web page, For contact form, all the fields mentioned will appear through my email as you have contacted, Using other forms available in this portifolio like the one under navigation > send your feedback will only display your messaage and email incase there is need to reply to you {Under implemetation-not functioning now}. Other formal data like your Web suffing activvities will be stored localy on your machine or your browser history. I dont share your data, instead will be agreement between me and you as my client.",
    },
    {
        title: "What is contained in this portifolio",
        text: "First, is common to know that security is the best concern while dealing with your loyal customers, this links is much secure hosted in netlify database , your data is secure, The portifolio is still under development and thus I suggest you give time to things that are doing wrong on your side eg:- Warning of some buttons upon clicking, will be fixed soon. As soon as the final version will be out, you will get notified only if I HAVE YOUR CONTACT DETAILS such as the Email address. Safe browsing",
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
        text: "Please, be specific with the question and information your share about yourself under this platform, do not provide unrelated information because it will be used as the key information to find your request and get feedback from me to your personal email address. Use of false information as a client will break the links of terms of service and privacy, Which may lead faulty communication between me and you as my client. Remember to put your Identity simple",
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
