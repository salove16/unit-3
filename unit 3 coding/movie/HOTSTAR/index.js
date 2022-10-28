// let url = "http://www.omdbapi.com/?apikey=f3d5c71f"

import provideTemplate from "../component/template.js";




let name_arr = JSON.parse(localStorage.getItem("userData"))

let name = document.getElementById("profile")
name.textContent = name_arr[0].name



//fetching data from url
const fetchData = async (res) => {

    let data = await res.json()
    return data;
}

// const latestMovie = async () => {
//     let res = await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&type=movie&y=2022`)
//     let data = await fetchData(res)
//     console.log(data)

// }
// latestMovie()



const main = async () => {
    try {

        //returning the value from input
        let value = document.getElementById("search_box").value
        // console.log(value)

        // fetch the data 
        let res = await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&s=${value}`)

        // data is in the form of object 
        let data = await fetchData(res)

        //get the only data in the format of arraay of object
        data = data.Search

        if (data === undefined) {
            return;
        }

        // send the to the function for appending the data in debounce section 
        appendDebounce(data)

    }
    catch (err) {
        console.log("err", err)
    }
}

const appendDebounce = (data) => {
    let debounce = document.getElementById("debounce")

    //when the page is loaded the debounce is empty
    debounce.innerText = ""
    //maping the data
    data.forEach(el => {
        //crationg a div for append the data
        let div = document.createElement("div")
        div.addEventListener("click", () => {
            let arr = [];
            arr.push(el)
            showSearchMovie(arr)
            debounce.innerText = ""
        })
        //create img tag for append the image
        let image = document.createElement("img")
        //set the attribute to the img tag
        image.setAttribute("src", el.Poster)

        //create a h5 element for append the title
        let title = document.createElement("h6")
        //append the text to the title elemen
        title.innerText = el.Title

        //append the image and title to div
        div.append(image, title)

        //append the div to the main div
        debounce.append(div)
    })
}

const movieResult = (e) => {
    // event.preventDefault()
    if (e.key == "Enter") {
        let movie1 = document.getElementById("search_box")
        let value = movie1.value
        console.log(value)
        dataInput(value)
        document.getElementById("debounce").textContent = ""
    }
}


let keydown = document.getElementById("search_box")

// add the input function for retur the data while input
keydown.addEventListener("input", main)
// add the keypress function for show the data after press enter 
keydown.addEventListener("keypress", movieResult)






const dataInput = async (value) => {
    // fetch the data 
    let res = await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&s=${value}`)
    let data = await fetchData(res)
    data = data.Search
    if (data == undefined) {
        return
    }
    //pass the searched data for append  into body
    showSearchMovie(data)
    // console.log(data)
}




const showSearchMovie = (data) => {
    //target the movie container through id
    let movie_container = document.getElementById("movie-container")
    //when the page is loaded the container become empty
    movie_container.textContent = ""
    provideTemplate(data, movie_container)
}


const signInUser = () => {
    console.log("ram")
    window.location.href = "../index.html"
}

document.getElementById("sign").addEventListener('click', signInUser)