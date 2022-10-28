let key="eae36450b309591aecc5d13a5d0dc169";


let iframe=document.querySelector("#gmap_canvas")
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function getWeatherData()
{
    document.querySelector("#main").textContent=""
    try{
    let city =document.querySelector("#city").value
    
let res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

let data=await res.json()

console.log("data:",data)
showWeather(data)
}
catch(err){
console.log("err:",err);
}
}

function showWeather(d){
console.log("d:",d)


let name=document.createElement("p")
name.innerText=(`Name-:${d.name}`);
let temp=document.createElement("p")
temp.innerText=(`Temperature-:${d.main.temp} °C`);

let humidity=document.createElement("p")
humidity.innerText=(`Humidity-:${d.main.humidity}%`);

let pressure=document.createElement("p")
pressure.innerText=(`Pressure-:${d.main.pressure} mb`);

iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
document.querySelector("#main").append(name,temp,humidity,pressure,iframe)
}