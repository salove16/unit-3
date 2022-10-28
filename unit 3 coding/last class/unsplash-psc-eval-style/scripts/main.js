// const key="G0VS2ZyPPAT2htSW4rP-OBc__gO6aIU2k83kEm9Kf14"


let makeapicall=async (url)=> {

try {
    let res = await fetch(url)
    let data = await res.json()
    return data
} catch (error) 
{
    console.log("error:",error)
}
   
}


let appendimage=(data,parent)=>{
    data.forEach(el => {
        
    let div=document.createElement("div")
    div.addEventListener("click",()=>{
        window.location.href="display.html"
        localStorage.setItem("display_item",JSON.stringify(el))
        
    })

    let image=document.createElement("img")
    image.src=el.urls.small

    let h4=document.createElement("h4")
    h4.textContent=el.user.name
    div.append(image,h4)
    // document.getElementById("main").append(div)
parent.append(div)

 });

}




let display=(el,parent)=>{
let div=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.urls.regular

    let h4=document.createElement("h4")
    h4.textContent=`Name-${el.user.name}`
    let des=document.createElement("h5")
    des.textContent=`Description-${el.description}`
    let likes=document.createElement("p")
    likes.textContent=`Likes-${el.likes}`
    let link=document.createElement("a")
    link.setAttribute("href",el.links.download)
    link.textContent="download"
    div.append(image,h4,des,likes,link)
    parent.append(div)

    
}


export  { makeapicall , appendimage ,display} ;