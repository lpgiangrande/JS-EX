/**
 * An example from chatGPT :
 * 
 * Weather app that allows users to search for weather information in different cities. 
 * Function that makes an API call to retrieve weather data based on a user's search input.
 * 
 */

function getWeatherData(city) { // higher-order function that returns another function that makes the API call.
    const apiKey = 'your-api-key-here';
  
    return function(callback) { //The returned function takes a callback function as a parameter, which is used to handle the response data once it's retrieved.
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error));
    }
  }

/*
To use this function, you can create a new instance of it with a specific city parameter, 
and pass in a callback function to handle the response data.
*/
const newYorkWeather = getWeatherData('New York');
newYorkWeather(data => console.log(data));


/*
This code creates a new function newYorkWeather that will retrieve 
weather data for New York. 
When newYorkWeather is called with a callback function, 
that function will be executed with the retrieved data as its parameter.


It allows you to create reusable functions that can be customized for specific use cases.
In this example, the getWeatherData function can be used to retrieve weather data for any city, 
and the specific city can be passed in as a parameter.
*/