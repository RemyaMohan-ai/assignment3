var readlineSync=require("readline-sync");
var a = readlineSync.question("enter number between 1 and 7");
if(a==1){
    console.log("Day : monday")
}else if(a==2){
    console.log("Day : tuesday")
}else if(a==3){
    console.log("Day : wednesday")
}else if(a==4){
    console.log("Day : thursday")
}else if(a==5){
    console.log("Day : friday")
}else if(a==6){
    console.log("Day : saturday")
}else if(a==7){
    console.log("Day : sunday")
}else{
    console.log("opted wrong number")
}