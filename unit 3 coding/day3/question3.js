



let a = new myArray("grandfather","father","son")

function myArray(){
    this.length=arguments.length;
    Object.defineProperty(this,"length",{
        Writable:true,
        enumerable:false,
    })
    for (let i=0;i<arguments.length;i++)
    {

        this[i]=arguments[i];
       

    }
    
   
}


myArray.prototype.भेजो=function (x){

let i=this.length;
this[i]=x;
this.length++;
// console.log(this.length)

}

myArray.prototype.घुमाओ=function (){
   
    let j=Math.floor(this.length/2);
    let k=this.length;
    
for ( let i=0;i<j;i++)
{
    let a=this[i];
    let b=this[k-1-i]
//    console.log(a)
this[i]=b;
this[k-1-i]=a;
}


}


myArray.prototype.वापसी=function (){


let l=this.length;
for(let i=1;i<l;i++){
    delete this[i]
}
 
this[0]
}



a.भेजो("grandson")
a.भेजो("great grandson")


a.घुमाओ()
console.log("a:",Object.values(a));

a.वापसी()



console.log("a:",Object.values(a));



