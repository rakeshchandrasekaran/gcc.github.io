var loadDataAboutUs = (function () {
    return function (language) {
            var stringyfy = JSON.stringify(about_us)
            var jsonObject = JSON.parse(stringyfy);
            if(language === "english"){
                
                document.getElementById("hMainHeader").innerHTML = jsonObject.english.about_us.first_row_header;

                document.getElementById("pfirst_row_paragraph_1").innerHTML = jsonObject.english.about_us.first_row_paragraph[0];
                document.getElementById("pfirst_row_paragraph_2").innerHTML = jsonObject.english.about_us.first_row_paragraph[1];
                document.getElementById("pfirst_row_paragraph_3").innerHTML = jsonObject.english.about_us.first_row_paragraph[2];
                
                document.getElementById("pSubHeader_1").innerHTML = jsonObject.english.about_us.first_row_sub_header[0];
                document.getElementById("pSubHeader_2").innerHTML = jsonObject.english.about_us.first_row_sub_header[1];
                document.getElementById("pSubHeader_3").innerHTML = jsonObject.english.about_us.first_row_sub_header[2];
                
                document.getElementById("hSecondRowData0").innerHTML = jsonObject.english.about_us.second_row_data[0];
                document.getElementById("hSecondRowData1").innerHTML = jsonObject.english.about_us.second_row_data[1];
                document.getElementById("hSecondRowData2").innerHTML = jsonObject.english.about_us.second_row_data[2];

                document.getElementById("hThirdRowHeader").innerHTML = jsonObject.english.about_us.third_row_header;
                
                document.getElementById("hFourthRowHeader").innerHTML = jsonObject.english.about_us.fourth_row_header;
                document.getElementById("hFourthRowData0").innerHTML = jsonObject.english.about_us.fourth_row_data[0];
                document.getElementById("hFourthRowData1").innerHTML = jsonObject.english.about_us.fourth_row_data[1];
                
                document.getElementById("hFifthRowHeader").innerHTML = jsonObject.english.about_us.fifth_row_header;
                document.getElementById("pFifthRowData0").innerHTML = jsonObject.english.about_us.fifth_row_data[0];
                document.getElementById("pFifthRowData1").innerHTML = jsonObject.english.about_us.fifth_row_data[1];
                document.getElementById("pFifthRowData2").innerHTML = jsonObject.english.about_us.fifth_row_data[2];
                document.getElementById("pFifthRowData3").innerHTML = jsonObject.english.about_us.fifth_row_data[3];
                
                document.getElementById("hSixthRowHeader").innerHTML = jsonObject.english.about_us.sixth_row_header;
            } else if(language === "tamil")
            {
                document.getElementById("hMainHeader").innerHTML = jsonObject.tamil.about_us.first_row_header;

                document.getElementById("pfirst_row_paragraph_1").innerHTML = jsonObject.tamil.about_us.first_row_paragraph[0];
                document.getElementById("pfirst_row_paragraph_2").innerHTML = jsonObject.tamil.about_us.first_row_paragraph[1];
                document.getElementById("pfirst_row_paragraph_3").innerHTML = jsonObject.tamil.about_us.first_row_paragraph[2];

                document.getElementById("pSubHeader_1").innerHTML = jsonObject.tamil.about_us.first_row_sub_header[0];
                document.getElementById("pSubHeader_2").innerHTML = jsonObject.tamil.about_us.first_row_sub_header[1];
                document.getElementById("pSubHeader_3").innerHTML = jsonObject.tamil.about_us.first_row_sub_header[2];

                document.getElementById("hSecondRowHeader").innerHTML = jsonObject.tamil.about_us.second_row_header;

                document.getElementById("hSecondRowData0").innerHTML = jsonObject.tamil.about_us.second_row_data[0];
                document.getElementById("hSecondRowData1").innerHTML = jsonObject.tamil.about_us.second_row_data[1];
                document.getElementById("hSecondRowData2").innerHTML = jsonObject.tamil.about_us.second_row_data[2];

                document.getElementById("hThirdRowHeader").innerHTML = jsonObject.tamil.about_us.third_row_header;
                
                document.getElementById("hFourthRowHeader").innerHTML = jsonObject.tamil.about_us.fourth_row_header;
                document.getElementById("hFourthRowData0").innerHTML = jsonObject.tamil.about_us.fourth_row_data[0];
                document.getElementById("hFourthRowData1").innerHTML = jsonObject.tamil.about_us.fourth_row_data[1];
                
                document.getElementById("hFifthRowHeader").innerHTML = jsonObject.tamil.about_us.fifth_row_header;
                document.getElementById("pFifthRowData0").innerHTML = jsonObject.tamil.about_us.fifth_row_data[0];
                document.getElementById("pFifthRowData1").innerHTML = jsonObject.tamil.about_us.fifth_row_data[1];
                document.getElementById("pFifthRowData2").innerHTML = jsonObject.tamil.about_us.fifth_row_data[2];
                document.getElementById("pFifthRowData3").innerHTML = jsonObject.tamil.about_us.fifth_row_data[3];
                
                document.getElementById("hSixthRowHeader").innerHTML = jsonObject.tamil.about_us.sixth_row_header;
            }
            
    };
})();