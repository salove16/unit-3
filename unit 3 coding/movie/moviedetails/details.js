

let movie = JSON.parse(localStorage.getItem("movie"))
let id = movie[0].imdbID

const fetchData = async (id) => {
    let res = await fetch(`https://www.omdbapi.com/?apikey=f3d5c71f&i=${id}`)
    let data = await res.json()
    console.log(data)
    appendData(data)
}

fetchData(id)

const appendData = (data) => {
    let container = document.querySelector(".container")
    container.textContent = ""



    let div = document.createElement("div")
    div.setAttribute("class", "image_div")

    let rightdiv = document.createElement("div")
    rightdiv.setAttribute("class", "details")


    let image = document.createElement("img")
    image.setAttribute("src", data.Poster)

    let title = document.createElement("h4")
    title.textContent = `Title : ${data.Title}`

    let type = document.createElement("p")
    type.innerText = `Type : ${data.Type}`

    let plot = document.createElement("p")
    plot.innerText = `Plot : ${data.Plot}`

    let actors = document.createElement("p")
    actors.innerText = `Actors : ${data.Actors}`

    let box = document.createElement("p")
    box.textContent = `BoxOffice : ${data.BoxOffice}`

    let genre = document.createElement("p")
    genre.innerText = `Genre : ${data.Genre}`

    let country = document.createElement("p")
    country.innerText = `Country : ${data.Country}`

    let language = document.createElement("p")
    language.innerText = `Language : ${data.Language}`

    let director = document.createElement("p")
    director.innerText = `Director : ${data.Director}`

    let rating = document.createElement("p")
    rating.innerText = `Rating : ${data.imdbRating}`

    let votes = document.createElement("p")
    votes.innerText = `Votes : ${data.imdbVotes}`

    div.append(image)

    rightdiv.append(title, type, plot, actors, box, genre, country, language, director, rating, votes)

    container.append(div, rightdiv)
}