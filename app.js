const apiKey="api_key";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric";
const im= document.querySelector(".weather");
async function checkWeather(city) {
  try {
      const response = await fetch(apiUrl + `&appid=${apiKey}&q=${city}`);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      console.log(data.weather[0].main);
      if(data.weather[0].main==="Clouds"){
        im.classList.add("cloudy");
      }
      if(data.weather[0].main==="Clear"){
        im.classList.add("clear");
      }
      if(data.weather[0].main==="Drizzle"){
        im.classList.add("drizzle");
      }
      if(data.weather[0].main==="Mist"){
        im.classList.add("mist");
      }
      if(data.weather[0].main==="Rain"){
        im.classList.add("rain");
      }
      if(data.weather[0].main==="Snow"){
        im.classList.add("snow");
      }
      if(data.weather[0].main==="Haze"){
        im.classList.add("haze");
      }
      document.querySelector(".place").innerHTML = data.name;
      document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp)} <sup>o</sup> C`;
      document.querySelector(".humid").innerHTML = `${data.main.humidity}%`;
      document.querySelector(".speed").innerHTML = `${data.wind.speed} Km/h`;
  } catch (error) {
      console.error(error.message);
      document.querySelector(".place").innerHTML = "Error: City not found";
      document.querySelector(".temperature").innerHTML = "";
      document.querySelector(".humid").innerHTML = "";
      document.querySelector(".speed").innerHTML = "";
      im.classList.add("found");
  }
}

document.querySelector(".myForm").addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = document.querySelector(".txt").value.trim();
    if (inputValue) {
      checkWeather(inputValue);
    }
});