// let key = "AIzaSyAyN8SfBhJ0cYZPujHH3hqbOt_HO7IMKOc";
// let key = "AIzaSyAC0tRNkWa5H-ktyCYVT-NGl-biWUoWcNw"
// let key = "AIzaSyCXdiWT__y119UuDrdpuFbTy2Z6a_VuFP8"
let key = "AIzaSyCg2jaxDKn3ADur9RuJ5fMj9CM9pVTcLJ8"
// let url="https://www.googleapis.com/youtube/v3/search"
let cont = document.querySelector(".debounce")



//fetch the all data
const fetchData = async (value) => {
    let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${key}&q=${value}`)
    let data = await res.json()
    // console.log(data)
    return data;
}


const searchMovie = async () => {
    let value = document.getElementById("searchMovie").value
    // console.log(value)
    let data = await fetchData(value)
    if (data === undefined) {
        return
    }
    renderData(data.items)
    // console.log(data)
}
let timer;
const debounceMovie = (data, delay) => {

    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        data();
    }, delay)
}
const renderData = (data) => {
    div = document.querySelector(".debounce")
    div.innerText = ""
    data.forEach(el => {
        let title = document.createElement("h4")
        title.innerText = el.snippet.title
        title.addEventListener("click", () => {
            let text = document.querySelector("h4").innerText
            showAllMovie(text)
            div.innerText = ""
            // cont.classList.toggle("white")
            cont.classList.toggle("none")
        })
        div.append(title)
    });
}


const showAllMovie = async (el) => {
    right = document.querySelector(".bodyRight")
    right.innerText = ""
    let data = await fetchData(el)
    data = data.items
    console.log(data)
    data.forEach(elem => {
        moviediv = document.createElement("div")

        movieLeft = document.createElement("div")

        let thumbnail = document.createElement("img")
        thumbnail.setAttribute("src", elem.snippet.thumbnails.default.url)
        thumbnail.addEventListener("click", () => {
            transferData(elem)
        })

        movieRight = document.createElement("div")

        let title = document.createElement("h3")
        title.innerText = elem.snippet.title

        let channel = document.createElement("p")
        channel.innerText = elem.snippet.channelTitle

        movieLeft.append(thumbnail)
        movieRight.append(title, channel)
        moviediv.append(movieLeft, movieRight)
        right.append(moviediv)



    })

}


const transferData = (elem) => {
    let arr = [];
    localStorage.setItem("Data", JSON.stringify(arr))
    const obj = {
        id: elem.id.videoId
    };
    arr.push(obj)
    localStorage.setItem("Data", JSON.stringify(arr))
    window.location.href = "/playvideo/index.html"

}











//toggle the debouncing background

const color = () => {
    cont.classList.toggle("white")
    cont.classList.toggle("none")
    console.log("masai")
}