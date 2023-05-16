 var readlineSync=require("readline-sync");
 var a = readlineSync.question("enter the number");
 if(a%2==0){
    console.log(a , "is even")
 }else{
    console.log(a, "is odd")
 }

