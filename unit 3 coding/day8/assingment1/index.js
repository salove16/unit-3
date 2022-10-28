let key = "9c73aca0";
// let key="d806bdr0";
//d806bdr0


async function searchmovie() {

    try {
        let movies = document.getElementById("query").value
        let res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${movies}`)
        let data = await res.json()

       
        console.log("dat:",data)
        return data.Search
    }
    catch (err) {
        console.log("err:", err)
    }

}

async function main() {


    let data = await searchmovie()
    if (data === undefined) {
        return false
    }

    appendData(data)
    // console.log("data:", data)
}


let movies_div = document.getElementById("movies")
// let btn=document.getElementById("clickmovies")
function appendData(movies) {
console.log(movies)
    movies_div.textContent = ""
    movies.forEach(function (el) {

        // let btn = document.createElement("button")
        // btn.addEventListener("click", selectdisply())
        let div = document.createElement("div")
        div.setAttribute("id","scrolldiv")
        div1=document.createElement("div")
        div.addEventListener("click",function(){
            
            
            selectdisplay(el);
            movies_div.textContent = ""

        })
        let div_img = document.createElement("div")
        let p = document.createElement("p")
        let img = document.createElement("img")
        img.setAttribute("class", "image")
        img.setAttribute("src", el.Poster)
        p.innerText = el.Title

        div_img.append(img)
        div1.append( p)
div.append(div_img,div1)

        // btn.append(div)
        movies_div.append(div)
    })
}

function selectdisplay(el) {
    document.getElementById("display").textContent=""
// console.log(el)
    // movies.forEach(function (el) {
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
div2.style.backgroundColor=" #0d1528e6"
        let img = document.createElement("img")
        img.setAttribute("class", "Dimage")
        img.setAttribute("src", el.Poster)
        div1.append(img)
        let name = document.createElement("h5")
        name.textContent = `Movie name-${el.Title}`

        let year = document.createElement("h5")
        year.textContent = `Relesed-${el.Year}`

        let type = document.createElement("h5")
        type.textContent = `Type-${el.Type}`

        let rating = document.createElement("p")
        rating.textContent = `Rating-${Math.random()*10+1}`

        div2.append(name,year,type,rating)

        let display=document.getElementById("display")
        display.style.boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        // display.style.backgroundColor="white"
        display.append(div1, div2)

    // })

}



let timerID;

function debounce(func, delay) {

    if (timerID) {
        clearTimeout(timerID)
    }
    timerID = setTimeout(function () {
        func()
    }, delay)



}