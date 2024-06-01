"use strict";
//assigment no 44
//a function that accepts a array of items a person wants on a sandwich. 
function mySandwitches(...item) {
    return `I want Sandwitch of ${item}`;
}
;
let firstCollection = mySandwitches("Ham", "cheese", "lettuce");
let Collection2 = mySandwitches("turkey", "swiss");
let Collection3 = mySandwitches();
console.log(firstCollection);
console.log(Collection2);
console.log(Collection3);
let carobjects = {
    carName: "honda",
    carModel: "civic"
};
function carinfo(carobjects) {
    return `color  ${carobjects.color}\n car number  ${carobjects.carnumber}`;
}
console.log(`car name  ${carobjects.carName}\ncar model  ${carobjects.carModel}`);
console.log(carinfo({ color: "white", carnumber: 1234 }));
