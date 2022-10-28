// let ykey="AIzaSyAyN8SfBhJ0cYZPujHH3hqbOt_HO7IMKOc";
//           AIzaSyCXdiWT__y119UuDrdpuFbTy2Z6a_VuFP8

//           AIzaSyCfnqyK10mzbg2Kyp9fprRVKsMQZ3RBuRk

let ykey ="AIzaSyAX5WmhCoRRo-Q2tIlzoSTvpQfXAgV3lPs"


// let ykey="AIzaSyCLHcU5b2Yjul57JGp26bWYug2p2h2V5M8"
// let ykey = "AIzaSyCRXGVVGLCLHxy_H0ZPccZbVEJYntYj5ko"


let searchData = async () => {
    let searchName = document.getElementById("searchName").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?regionCode=IN&part=snippet&maxResults=20&order=relevance&q=${searchName}&type=video&key=${ykey}`)

    let data = await res.json()
    console.log(data)
    const videoData = data.items;
    console.log(videoData)
    displayVideo(videoData)


}
search = () => {
    searchData()
}
searchData()


const displayVideo = (videoData) => {
    document.querySelector(".right").textContent = ""
    videoData.forEach((el) => {
        console.log(el)
        const { id: { videoId }, snippet: { title } } = el
        console.log(videoId, title)
        let mainDiv = document.createElement("div")
        mainDiv.addEventListener("click", function () {
            localStorage.setItem("video",JSON.stringify(el))
            window.location.href="searchdisply.html"
        })
        let thum = document.createElement("img")
        thum.setAttribute("class", "thumbnails")
        thum.setAttribute("src", el.snippet.thumbnails.high.url)
        // iframe.setAttribute("src",`https://www.youtube.com/embed/${videoId}`)
        let name = document.createElement("p")
        name.textContent = title
        mainDiv.append(thum, name)
        document.querySelector(".right").append(mainDiv)
    });



}







