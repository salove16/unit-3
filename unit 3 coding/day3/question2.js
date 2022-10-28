let a=new myArray("grandfather","father","son")

function myArray(){

   

    for (let i=0;i<arguments.length;i++)
    {

        this[i]=arguments[i];
        this.length=arguments.length;
    }
   
}
console.log("a:",a)