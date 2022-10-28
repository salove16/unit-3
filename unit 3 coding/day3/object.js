 const grandfather={
     name:"Lakshmi",
looks:"Fair",
height:"tall",
eye_color:"brown"

 }
console.log("grandfather:",grandfather)
 const father=Object.create(grandfather)
 father.name="Vinod";
console.log("father:",father)

 const son=Object.create(father)
 son.name="shalabh";
 console.log('son:',son)