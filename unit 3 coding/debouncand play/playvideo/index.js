


let arr = JSON.parse(localStorage.getItem("Data"))

arr.map((el) => {
    let iframe = document.getElementById("video")
    iframe.src = `https://www.youtube.com/embed/${el.id}`

})
console.log(arr)