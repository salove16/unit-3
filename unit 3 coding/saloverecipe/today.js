

import navbar from "./navbar/navbar.js"

let div = document.getElementById("navbar")
div.innerHTML = navbar()


import { getData, appendData } from "./components/script.js"

const showData = async () => {
    let url = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    let data = await getData(url)
    data = data.meals
    let container = document.getElementById("container")
    appendData(data, container)
    console.log(data)
}

showData()