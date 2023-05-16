var readlineSync=require("readline-sync");
var a = readlineSync.question("enter the number");
console.log("mutiplication table of" , a)
for(let i=1; i<=20;i++){
    console.log(a , "*" , i,"="+a*i )
}