var moviedata = [
    {
        image: "https://www.teahub.io/photos/full/3-30311_free-movie-wallpaper-anime-wallpaper-kimi-no-na.jpg",
    },
    {
        image: "https://wallpaperaccess.com/full/183794.jpg",
    },
    {
        image: "https://wallpapercave.com/wp/wp5305143.jpg",
    },
    {
        image: "https://media.comicbook.com/2020/10/demon-slayer-movie-mugen-train-international-release-dates-1241352.jpeg?auto=webp&width=1200&height=630&crop=1200:630,smart",
    },
    {
        image: "https://store-images.s-microsoft.com/image/apps.15041.71343510227343465.377174a9-abc8-4da3-aaa6-8874fdb9e2f5.00fc0a9e-295e-40ca-a391-58ed9f83e9a0?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
    }

];

let i = 0;
setInterval(function () {
    if (i == moviedata.length) {
        i = 0;
    }
    var img = document.querySelector("#slideImg")
    img.src = moviedata[i].image


    i++
}, 3000)


var movieArr =[]

function movie_details(n, d, i, r) {
    this.name = n,
    this.date = d
    this.image = i,
        this.rating = r

}

let m1 = new movie_details("The Godfather", "16 june 2019", "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg", 9.2)

let m2 = new movie_details("The DarkNight", "16 june 2017", "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg", 9.0)
let m3 = new movie_details("The Godfather Part-2", "16 june 2014", "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg", 8.9)
let m4 = new movie_details("Angry Men", "16 july 2015", "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg", 7.6)
let m5 = new movie_details("Inception", "03 january 2014", "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg", 8.5)
let m6 = new movie_details("Fight Club", "03 feb 2011", "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg", 8)
let m7 = new movie_details("Forest gump", "16 march 2013", "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY98_CR0,0,67,98_AL_.jpg", 8.2)
let m8 = new movie_details("The Matrix", "21 april 2010", "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg", 9.2)
let m9 = new movie_details("Parasite", "28 june 2014", "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg", 7.5)

movieArr.push(m1)
movieArr.push(m2)
movieArr.push(m3)
movieArr.push(m4)
movieArr.push(m5)
movieArr.push(m6)
movieArr.push(m7)
movieArr.push(m8)
movieArr.push(m9)
console.log(movieArr)
if(movieArr.length!=0){

localStorage.setItem("movies",JSON.stringify(movieArr) )
movie_display(movieArr)
}
else{
    movieArr = JSON.parse(localStorage.getItem("movies"))
    movie_display(movieArr)
}

function movie_display(movieArr){
    document.querySelector("#movies").textContent=""

    
    movieArr.map(function(elem)
    {
        var div1=document.createElement("div")
        div1.setAttribute("class","flex_img")
        var div2=document.createElement("div")
        var div3=document.createElement("div")
        
        var h3=document.createElement("h3")
        h3.textContent=elem.name;
        var h5=document.createElement("h5")
        h5.textContent=elem.date
        var img=document.createElement("img")
        img.setAttribute("src",elem.image)
        img.setAttribute("id","movie_id")
        var p=document.createElement("p")
        p.textContent=(`imdn-Rating ${elem.rating}`)
        div3.append(h3,h5,p)
        div2.append(img)
        div1.append(div2,div3)
        document.querySelector("#movies").append(div1)
    })
}
// sortingData(movieArr)

function sortingData() {
    var value = document.querySelector("#sorting_data").value
    console.log(value)
    
    // if(value=="all")
    // {
    //     movie_display(movieArr) 
    // }
    var all=[...movieArr]
    var l_h;
    var h_l;
    if (value == "sort-lh") {
        
     l_h=   movieArr.sort(function (a, b) {
            return a.rating - b.rating
        })
    }
    else if (value == "sort-hl") {
       h_l= movieArr.sort(function (a, b) {
            return b.rating - a.rating
        })
    }
    else{
        movie_display(all)
    }
    
    console.log(movieArr)
    movie_display(movieArr)
}
// function sortingData() {
//     var value = document.querySelector("#sorting_data").value
//     console.log(value)
//     if(value=="all")
//     {
//         movie_display(movieArr) 
//     }
// }

// function low(movieArr){

//     for (var i=0;i<movieArr.length;i++)
//     {
//       for (var j=0;j<movieArr.length-i-1;j++)
//       {
//         if(movieArr[j].rating>movieArr[j+1].rating)
//         {
//           swap(movieArr,j,j+1)
//         }
//       }
//     }
//     return movieArr


// }
// var low=document.querySelector("#low")

// function high(){
//     for (var i=0;i<arr.length;i++)
//     {
//       for (var j=0;j<arr.length-i-1;j++)
//       {
//         if(arr[j]>arr[j+1])
//         {
//           swap(arr,j,j+1)
//         }
//       }
//     }
//     return arr



// }

// function swap(movieArr,i,min)
// {
//     var temp=movieArr[i];
//     movieArr[i]=movieArr[min];
//     movieArr[min]=temp;
//     return movieArr
// }