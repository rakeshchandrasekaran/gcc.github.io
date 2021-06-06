var loadDataFAQ = (function () {
    return function (language) {
        var stringyfy = JSON.stringify(faq)
        var jsonObject = JSON.parse(stringyfy);
        if (language === "english") {
            document.getElementById("btnHome").innerHTML = jsonObject.english.home;
        } else if (language === "tamil") {
        }
    };
})();