document.querySelector("form").addEventListener("submit",getData)

var signupdata=JSON.parse(localStorage.getItem("clientData"))||[];


function signData(n,c,e,p){
    this.name=n,
    this.number=c,
    this.email=e,
    this.password=p
}

function getData(event){
    event.preventDefault()
    var n=document.querySelector("#name").value
    var c=document.querySelector("#numb").value
    var e=document.querySelector("#email").value
    var p=document.querySelector("#pass").value


    var client= new signData(n,c,e,p)

    if(n==""||c==""||e==""||p=="")
    {
        alert("fill the details")
    }
    else{
        signupdata.push(client)
        localStorage.setItem("clientData",JSON.stringify(signupdata))
    }
   
}