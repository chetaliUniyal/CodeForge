const apikey="260b923cc28759bf06276b44d94ff19a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&appid=260b923cc28759bf06276b44d94ff19a&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".longitude").innerHTML=data.coord.lon+"°";
    document.querySelector(".latitude").innerHTML=data.coord.lat+"°";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="cloudy.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="haze.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
}
    
 
    




searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})




