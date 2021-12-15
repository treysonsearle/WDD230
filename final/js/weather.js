

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=mesa&appid=6a75ea1a7ed2f3dbecdb491aeae0b255&units=imperial"
// const apiURL = "api.openweathermap.org/data/2.5/weather?q=mesa&appid=20f346fc8797fa5f71cb9e571fe76791"


//(K − 273.15) × 9/5 + 32 = °F



fetch(apiURL)
   .then((response) => response.json())
   .then((result) => {
      console.log(result)
      document.getElementById("current").innerHTML = "Currently: " + result.weather[0].main
      document.getElementById("temp").innerHTML = "Temperature: " + Math.round(result.main.temp) + '°F'
      document.getElementById("humidity").innerHTML = "Humidity: " + Math.round(result.main.humidity)
   });

// Get the forecast for 5 days
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=mesa&units=imperial&appid=39118d2fb9fc18f735a898398fe6dfa3"

fetch(forecastURL)
   .then((response) => response.json())
   .then((forecast) => {
      const list = forecast.list

      // Declare an empty array to store the returned value from the for loop that will get the five forecasts based on time (18:00:00)
      let fiveDayForecast = [];
      for (let i = 0; i < list.length; i++) {
         if (list[i].dt_txt.includes("18:00:00")) {
            fiveDayForecast.push(list[i])
         }
      }

      // Define a function to convert the unix date to human date format
      // the parameter will the "dt" from fiveDayForecast list in unix format
      function correctDate(dt) {
         const miliseconds = dt * 1000
         const dateObject = new Date(miliseconds)
         const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
         return weekDay
      }

      // Set the DayForecast of the week
      document.getElementById("label1").textContent = correctDate(fiveDayForecast[0].dt);
      document.getElementById("label2").textContent = correctDate(fiveDayForecast[1].dt);
      document.getElementById("label3").textContent = correctDate(fiveDayForecast[2].dt);

      // Set the temperature
      document.getElementById("temp1").textContent = `${fiveDayForecast[0].main.temp}°F`
      document.getElementById("temp2").textContent = `${fiveDayForecast[1].main.temp}°F`
      document.getElementById("temp3").textContent = `${fiveDayForecast[2].main.temp}°F`

      // Set the weather icon
      const imageLink = "https://openweathermap.org/img/w/";
      document.getElementById("image1").setAttribute("src", `${imageLink}${fiveDayForecast[0].weather[0].icon}.png`)
      document.getElementById("image2").setAttribute("src", `${imageLink}${fiveDayForecast[1].weather[0].icon}.png`)
      document.getElementById("image3").setAttribute("src", `${imageLink}${fiveDayForecast[2].weather[0].icon}.png`)

      // Set the description for each day
      document.getElementById("image1").setAttribute("alt", fiveDayForecast[0].weather[0].description)
      document.getElementById("image2").setAttribute("alt", fiveDayForecast[1].weather[0].description)
      document.getElementById("image3").setAttribute("alt", fiveDayForecast[2].weather[0].description)


   })