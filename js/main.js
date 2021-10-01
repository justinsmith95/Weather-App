let errorMsg = document.getElementById("errorMsg");

let submitBtn = document.getElementById("submitButton");
let testBtn = document.getElementById("testHideShow");

let zipBox = document.getElementById("zipBox");
zipBox.setAttribute("type", "text", "value", "maxLength", "placeHolder");
zipBox.maxLength = 5;
let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=40508,us&appid=3fb0b2d51695bf29b569a84b2d436a3f';

//function to replace zip in url with text input -
    //create a variable with url string
    //create a variable with empty string
    //when submitbtn pressed, place the input text in the empty string zip variable
    //when submitbtn pressed, replace url string variable at zip location with empty string zip variable

let cityTitle = document.getElementById("cityTitle");
let cityName = document.getElementById("cityName");
let tempTitle = document.getElementById("tempTitle");
let tempK = document.getElementById("tempK");
let tempF = document.getElementById("tempF");
let tempC = document.getElementById("tempC");
let conditionTitle = document.getElementById("conditionTitle");
let currentCndtn = document.getElementById("currentCondition");
let conditionImg = document.getElementById("conditionImg");
let weatherDataBox = {
    cityTitle, cityName,
    tempTitle, tempK, tempF, tempC,
    conditionTitle, currentCndtn, conditionImg
};

let page = [];
let errorMsgArray = [];// [errorMsg.style.display = 'none', errorMsg.style.display = 'none', 'ERROR - invalid zip code entered.'];
let weatherDataBoxArray = []; //[weatherDataBox.style.display = 'none', weatherDataBox.style.display = 'block', weather.DataBox.style.display = 'none'];

submitBtn.addEventListener('click', submitButtonMethod);

class weatherApp {
    constructor(page, errorMsg, weatherDataBox) {
        this.page = page;
        this.errorMsg = errorMsg;
        this.weatherDataBox = weatherDataBox;
    };
    stateManager() {
        if (this.page === initialPage) {
            this.errorMsg = errorMsgArray[0];
            this.weatherDataBoxArray = weatherDataBoxArray[0];
        } else if (this.page === workingPage) {
            this.errorMsg = errorMsgArray[1];
            this.weatherDataBoxArray = weatherDataBoxArray[1];
        } else if (this.page === errorPage) {
            this.errorMsg = errorMsgArray[2];
            this.weatherDataBoxArray = weatherDataBoxArray[2];
        }
    }
};

let weatherAppObj1 = null;
let zipInput = document.getElementById("zipBox").value;

window.onload = initialLoad();



function testhideshow() {
    console.log('test')
    document.getElementById("errorMsg").style.visibility= "hidden";
}


function initialLoad() {
    weatherAppObj1 = new weatherApp("", "", "");
};

function submitButtonMethod() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipInput},us&appid=3fb0b2d51695bf29b569a84b2d436a3f`)
.then(function (response) {
    // handle success
    console.log(response);
    populateData(response);
   // weatherAppObj1 = new weatherApp(workingPage, document.getElementById("errorMsg").visibility = "hidden", document.getElementById("weatherBoxData");   
})
.catch(function (error) {
    // handle error
    console.log(error);
    showError(error);
    weatherAppObj1 = new weatherApp(errorPage, '', '');
})
.then(function () {
    // always executed
});
};







let testAxios = document.getElementById("test");

function showError(error) {
        if ((zipBox.length < 5) || (zipBox.text = isNaN)) {
        weatherAppObj.page = 2;
        weatherAppObj.stateManager();
        };
    };

function populateData(response) {
        cityName.innerHTML = response.data.name;
        tempK.innerHTML = response.data.main.temp;
        tempC.innerHTML = (tempK.innerHTML - 273.15);
        tempF.innerHTML = (tempC.innerHTML * (9/5) + 32);
        currentCndtn.innerHTML = response.data.weather[0].description;
        console.log(currentCndtn);
        //conditionImg value here
        cityName;
        tempK;
        tempC;
        tempF;
        currentCndtn;
    };


//function hide() {
//    if (weatherDataBox.style.display === "block") {
//        weatherDataBox.style.display === "none";
//    } else {
//        weatherDataBox.style.display === "none";
//    };
//};
