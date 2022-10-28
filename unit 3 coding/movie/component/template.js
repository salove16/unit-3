

const provideTemplate = (data, movie_container) => {

    data.map(el => {

        // create a div
        let div = document.createElement("div")


        //the div is used for append the image
        let left_div = document.createElement("div")
        left_div.setAttribute("class", "left_div")

        // the div is used for apped only the title,year,id
        let right_div = document.createElement("div")
        right_div.setAttribute("class", "right_div")

        // create a image tag 
        let image = document.createElement("img")
        // set a attribute to the image tag 
        image.setAttribute("src", el.Poster)

        //create a heading for append the title to the body
        let title = document.createElement("h6")
        title.innerText = el.Title

        //creage a para for append the release year of a movie
        let year = document.createElement("p")
        year.innerText = el.Year




        let button = document.createElement("button")
        button.innerText = "Get More"
        button.addEventListener("click", () => {
            let movie_arr = []
            let movie = {
                imdbID: el.imdbID
            }


            movie_arr.push(movie)
            localStorage.setItem("movie", JSON.stringify(movie_arr))
            window.location.href = "../moviedetails/details.html"
        })

        //here append the image to left div
        left_div.append(image)

        //here aooend the title,year,id to the right div
        right_div.append(title, year, button)

        // append the left_div and right_div to the child div 
        div.append(left_div, right_div)

        //here append the child div to the main div 
        movie_container.append(div)
    })
}

export default provideTemplate;