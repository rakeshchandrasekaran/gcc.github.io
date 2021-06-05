var loadMainConect = (function () {
    return function (language) {
        var stringyfy = JSON.stringify(home)
        var jsonObject = JSON.parse(stringyfy);
        if (language === "english") {
            document.getElementById("btnWorkWithUsInSIdeBanner").innerHTML = jsonObject.english.main_banner_button;
            document.getElementById("hSecondBannerHeading").innerHTML = jsonObject.english.second_banner_heading;
            document.getElementById("hThirdBannerHeading").innerHTML = jsonObject.english.third_banner_heading;
            document.getElementById("hThirdBannerHeadingDescription").innerHTML = jsonObject.english.third_banner_heading_description;
            document.getElementById("hThirdBannerSubHeading").innerHTML = jsonObject.english.third_banner_sub_heading;
            document.getElementById("btnBeaChangeMaker").innerHTML = jsonObject.english.third_banner_be_a_change_button;
         } else if (language === "tamil") {
            document.getElementById("btnWorkWithUsInSIdeBanner").innerHTML = jsonObject.tamil.main_banner_button;
            document.getElementById("hSecondBannerHeading").innerHTML = jsonObject.tamil.second_banner_heading;
            document.getElementById("hThirdBannerHeading").innerHTML = jsonObject.tamil.third_banner_heading;
            document.getElementById("hThirdBannerHeadingDescription").innerHTML = jsonObject.tamil.third_banner_heading_description;
            document.getElementById("hThirdBannerSubHeading").innerHTML = jsonObject.tamil.third_banner_sub_heading;
            document.getElementById("btnBeaChangeMaker").innerHTML = jsonObject.tamil.third_banner_be_a_change_button;
        }
    };
})();