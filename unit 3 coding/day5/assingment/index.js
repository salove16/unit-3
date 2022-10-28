
var orderarray=[]

async function ordergiven(){

var chicken=document.querySelector("#chicken")
var nugget=document.querySelector("#nugget")
var wrap=document.querySelector("#wrap")
var swrap=document.querySelector("#swrap")
var gc=document.querySelector("#gc")

if(chicken.checked)
{
    orderarray.push(chicken.value)
    // console.log(orderarray)
}
if(nugget.checked)
{
    orderarray.push(nugget.value)
}
if(wrap.checked)
{
    orderarray.push(wrap.value)
}
if(swrap.checked)
{
    orderarray.push(swrap.value)
}
if(gc.checked)
{
    orderarray.push(gc.value)
}

let orderpromise= new Promise(function(resolve,reject)
{
setTimeout(function(){

resolve(orderarray)

},5000)
})
let res=await orderpromise
console.log(res)
displayorder(res)
let orderId=Math.floor(Math.random()*900000+1)
document.querySelector("h3").textContent=`ORDER Id-${orderId}`
orderarray.splice(0,orderarray.length)
console.log(orderarray)
}



function displayorder(res){
    document.querySelector("#main").textContent=""

res.map(function(el){

    let image = document.createElement("img")
    image.setAttribute("id", "image")

    if (el == "mchicken") {
        image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75HtfpnHLuZraXuWa8qGTRrqWgI8eREwzrA&usqp=CAU")
    }
    else if (el == "mnugget") {
        image.setAttribute("src", "https://image.shutterstock.com/image-photo/stanislawice-poland-may-30-2021-260nw-2092417123.jpg")
    }
   else  if (el == "pcwrap") {
        image.setAttribute("src", "https://kirbiecravings.com/wp-content/uploads/2019/02/furaido-1.jpg")
    }
   else if (el == "swrap") {
        image.setAttribute("src", "https://www.mashed.com/img/gallery/the-truth-about-mcdonalds-snack-wraps/l-intro-1612463861.jpg")
    }
    else if (el == "gcdelexu") {
        image.setAttribute("src", "https://www.simplyrecipes.com/thmb/7KwExJ0ZbVEmlxBaMsgmrBTi9M4=/4667x3111/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg")
    }
    document.querySelector("#main").append(image)
})
}