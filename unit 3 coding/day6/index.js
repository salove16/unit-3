let key="9c73aca0";
// let key="d806bdr0";
//d806bdr0


async function searchmovie(){

    try{
    let movies=document.getElementById("query").value
    let res= await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movies}`) 
    let data=await res.json()
    // console.log("dat:",data)
    return data.Search
}
catch(err){
console.log("err:",err)
}
   
}

async function main()
{


    let data= await searchmovie()
if(data === undefined)
{
    return false
}

appendData(data)
    console.log("data:",data)
}


let movies_div=document.getElementById("movies")

function appendData(movies)
{movies_div.textContent=""
    movies.forEach(function(el){
        let p=document.createElement("p")

        p.innerText=el.Title
        movies_div.append(p)
    })
}
let timerID;

function debounce(func,delay){

if(timerID){
    clearTimeout(timerID)
}
    timerID=  setTimeout(function(){
        func()
    },delay)



}