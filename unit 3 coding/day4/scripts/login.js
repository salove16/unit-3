document.querySelector("form").addEventListener("submit",getData)

var signupdata=JSON.parse(localStorage.getItem("clientData"));




function getData(event){
    event.preventDefault()
 
    var e=document.querySelector("#email").value
    var p=document.querySelector("#pass").value
    let count=0;
for(let i=0;i<signupdata.length;i++)
{
    if(signupdata[i].email==e&&signupdata[i].password==p)
    {
       window.location.href="index.html"
    
    }else
    {
count++
    }
}
if(count==signupdata.length)
{
    alert("invalid Credentials")
}
   
   
}