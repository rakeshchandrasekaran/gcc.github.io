var loadSecondaryNavBar = (function () {
    return function (language) {
            var stringyfy = JSON.stringify(secondaryNavBar)
            var jsonObject = JSON.parse(stringyfy);
            if(language === "english"){
                document.getElementById("btnHome").innerHTML = jsonObject.english.home;
                document.getElementById("btnAboutUs").innerHTML = jsonObject.english.about_us;
                document.getElementById("btnCouncil").innerHTML = jsonObject.english.council;
                document.getElementById("btnWorkWithUs").innerHTML = jsonObject.english.work_with_us;
                document.getElementById("btnEvents").innerHTML = jsonObject.english.events;
                document.getElementById("btnProjects").innerHTML = jsonObject.english.projects;
                document.getElementById("btnFAQ").innerHTML = jsonObject.english.faq;
                document.getElementById("btnContactUs").innerHTML = jsonObject.english.contact_us;
            } else if(language === "tamil")
            {
                document.getElementById("btnHome").innerHTML = jsonObject.tamil.home;
                document.getElementById("btnAboutUs").innerHTML = jsonObject.tamil.about_us;
                document.getElementById("btnCouncil").innerHTML = jsonObject.tamil.council;
                document.getElementById("btnWorkWithUs").innerHTML = jsonObject.tamil.work_with_us;
                document.getElementById("btnEvents").innerHTML = jsonObject.tamil.events;
                document.getElementById("btnProjects").innerHTML = jsonObject.tamil.projects;
                document.getElementById("btnFAQ").innerHTML = jsonObject.tamil.faq;
                document.getElementById("btnContactUs").innerHTML = jsonObject.tamil.contact_us;
            }
            
    };
})();