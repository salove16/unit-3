// https://fakestoreapi.com/products

var main;

let showData=async ()=>
{
  try{ 
let res= await fetch(`https://fakestoreapi.com/products`)
let data=await res.json()
console.log(data)
display(data)
  }
catch(err)
{
    console.log("err:",err)
}

}
showData()


let display=(data) =>
{
    
    main=document.querySelector("#container")
    // console.log("new:",data)

data.forEach((el)=>{
var mainDiv=document.createElement("div")
 var image=document.createElement("img")
    image.setAttribute("src",el.image)
    var title=document.createElement("h4")
    title.textContent=el.title
    var rating=document.createElement("p")
    rating.textContent=el.rating.rate

mainDiv.append(image,title,rating)


         main.append(mainDiv)
})

   


}

// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjall