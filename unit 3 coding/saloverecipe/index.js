
//import navbar 
import navbar from "./navbar/navbar.js"

//target index page through id
let div = document.getElementById("navbar")

//append to navbar
div.innerHTML = navbar();


import { getData, appendData } from "./components/script.js";


const searchMeal = async () => {
    try {
        let value = document.getElementById("search").value
        let url;
        if (value.length == 1) {
            url = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)

        }
        if (value.length > 1) {
            url = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        }
        let data = await getData(url)
        data = data.meals
        if (data === null) {
            return false;
        }
        dataDebounce(data)
        // console.log(data)
    }
    catch (res) {
        console.log("res", res)
    }
}
const enterMealName = async (e) => {

    if (e.key == "Enter") {
        let value = document.getElementById("search").value
        let url = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        let data = await getData(url)
        data = data.meals
        let container = document.getElementById("container")
        appendData(data, container)
        document.getElementById("debounce").innerText = ""
        // console.log(data)

    }
}
let search = document.getElementById("search")
search.addEventListener("keydown", enterMealName)
search.addEventListener("input", searchMeal)

const dataDebounce = (data) => {
    let debounce = document.getElementById("debounce")
    debounce.innerText = "";


    data.forEach(el => {

        let meal = document.createElement("h5")
        meal.innerText = el.strMeal
        meal.addEventListener("click", () => {
            showDetails(el.strMeal)
        })

        debounce.append(meal)

    });
    // console.log(data)
}


const showDetails = async (meal) => {

    let url = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let data = await getData(url)
    data = data.meals
    console.log(data)
    let container = document.getElementById("container")
    appendData(data, container)
    document.getElementById("debounce").innerText = ""
}
