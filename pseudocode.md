Purpose -
    User can submit a zip code and receive relevant weather data displayed to them

Objects -
    weatherApp: object to manage state (page?)
    page: array of pages with corresponding properties (hide/show objects)
    text bar (currentZip): place to input zip code
    submitButton: when clicked will  submit the zip code and retrieve the data (call the API?)
    errorMsg: " " text indicating an error because the zip code is invalid/API data was not retrieved
    weatherData: displays the data retrieved from the API -
        tempK: temp in K
        tempF: temp in F
        tempC: temp in C
        img: weather-relevant image (img1, img2, img3)
        cityName: city of the zip code
        condition: heavy rain, light rain, cloudy, etc
    isBusy: loading icon

ON START -
    Load the initial page: weatherApp page 0
    Validation: some way to check if there is a 5 digit number entered into the zipcode bar
    API Call: on Submit/Enter call the API (retrieve data)
    Parse Data: filter the data from the API call and retrieve the relevant info
    On State Change/Update State: update state when submit is clicked/Enter is pressed
    Update View: display the page corresponding to the updated state

BUILD -
Create a class weatherApp to manage state -
    constructor(page, errorMsg, submitButton, currentZip, weatherData, isBusy)

Create a class weatherData to hold each data object (temp K, F, C)
    have a function to display the correct image corresponding to weather condition
        If Else function?

create arrays/multiple properties for  each object -
    page [0,1,2,3] -
        0 = default page with everything hidden except currentZip and Submit
        1 = just like the default page but displays the weatherData and relevant img (valid submission, ideal outcome)
        2 = just like the default page but displays the errorMsg (API data not retrieved, invalid zip code)
        3 = just like the default page but displays the loading icon while API data is retrieved (loading)
    errorMsg [show, hide]
    submitButton - always shown
    currentZip - always shown
    weatherData [show, hide]


Create multiple (4) weatherAppObj with properties relating to each page -
    weatherAppObj1 [page 0, show submitButton, show currentZip, hide everything else]
    weatherAppObj2 [page 1, default but show weatherData]
    weatherAppObj3 [page 2, default but show errorMsg]
    weatherAppObj4 [page 3, default but show isBusy]

create an onclick event handler for the submit button

create a function that when submitButton is clicked {
    call the API,
    parse the API,
    if the API is being called, return weatherObj4,
    else if the API data is correctly called, return WeatherObj2,
    else if the API data fails to be called, return weatherObj3
}

    




