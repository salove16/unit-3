let key ="eae36450b309591aecc5d13a5d0dc169"

// let array=[]
let cityname;

let iframe=document.querySelector("#gmap_canvas")
async function searchWeather(){
  
  cityname=document.querySelector("#cityName").value
  let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=metric`)
  let data=await res.json()
  

    // console.log(data)
    get7Weather(data.coord.lat,data.coord.lon)
    displayWeather(data)
    
}




function displayWeather(data){
// console.log("data:",data)
var left=document.querySelector(".left")
left.textContent=""

let right=document.querySelector(".right")

let div=document.createElement("div")
div.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
let name=document.createElement("h3")
name.textContent=cityname;
let Icon = document.createElement("img")
Icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)


let cloud;

let mintemp=document.createElement("h4")
mintemp.textContent=`Min-Temp:${data.main.temp_min} °C`
let maxtemp=document.createElement("h4")
maxtemp.textContent=`Max-Temp:${data.main.temp_max} °C`
var rise=new Date(data.sys.sunrise*1000)
rise=rise.toUTCString()

var set=new Date(data.sys.sunset*1000)
set=set.toUTCString();

let sunrise=document.createElement("h5")
sunrise.textContent=`Sunrise:${rise}`

let sunset=document.createElement("h5")
sunset.textContent=`Sunset:${set}`

let wind=document.createElement("h6")
wind.textContent=`Wind speed:${data.wind.speed}km/hr`
div.append(name,Icon,mintemp,maxtemp,sunrise,sunset,wind)
left.append(div)

iframe.src=`https://maps.google.com/maps?q=${cityname}&t=&z=13&ie=UTF8&iwloc=&output=embed`
right.append(iframe)
}

async function get7Weather(lat,lon){
    console.log(lat,lon)
let newres=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=${key}`)
let newData=await newres.json()
console.log(newData)
}




// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 2500, …}
// base: "stations"
// clouds:
// all: 0
// [[Prototype]]: Object
// cod: 200
// coord:
// lat: 25.6
// lon: 85.1167
// [[Prototype]]: Object
// dt: 1644514352
// id: 1260086
// main:
// feels_like: 287.96
// humidity: 88
// pressure: 1015
// temp: 288.11
// temp_max: 288.11
// temp_min: 288.11
// [[Prototype]]: Object
// name: "Patna"
// sys:
// country: "IN"
// id: 9129
// sunrise: 1644454701
// sunset: 1644494958  
// const dt = 1610685149
    
// var day = new Date(dt*1000);

// console.log(day.toUTCString()) // 'Fri, 15 Jan 2021 04:32:29 GMT'
// console.log(day.toDateString()) // 'Fri Jan 15 2021'
// console.log(day.toISOString()) // '2021-01-15T04:32:29.000Z'
// console.log(day.toString()) // 'Fri Jan 15 2021 07:32:29 GMT+0300 (GMT+03:00)'

// type: 1
// [[Prototype]]: Object
// timezone: 19800
// visibility: 2500
// weather: Array(1)
// 0:
// description: "mist"
// icon: "50n"
// id: 701
// main: "Mist"
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)
// wind:
// deg: 250
// speed: 2.06
// [[Prototype]]: Objec


