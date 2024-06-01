//assigment no 44
//a function that accepts a array of items a person wants on a sandwich. 
function mySandwitches(...item:string[]){
    return`I want Sandwitch of ${item}`;

} ;
let firstCollection =mySandwitches("Ham","cheese","lettuce");
let Collection2=mySandwitches("turkey","swiss")
let Collection3=mySandwitches()
console.log(firstCollection);
console.log(Collection2);
console.log(Collection3);
//assigment no 45
interface Car{
    carName:string,
   carModel:string
}
let carobjects:Car={
   carName:"honda",
    carModel:"civic"
}
function carinfo(carobjects:{color:string,carnumber:number}):string{
   return`color  ${carobjects.color}\n car number  ${carobjects.carnumber}`
}console.log(`car name  ${carobjects.carName}\ncar model  ${carobjects.carModel}`);
console.log(carinfo({color:"white",carnumber:1234}));