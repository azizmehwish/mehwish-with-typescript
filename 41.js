"use strict";
//assigment no 41
//Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//let magicianNames =["Ali","Issa","tahir","raja"];
//function show_magicians(){
//for (let magicianName of magicianNames){
//  console.log(magicianName)
//}
//};
//show_magicians();
//show_magicians();
// assigment no 42
// a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() t
let magicianNames = ["Ali", "Issa", "tahir", "raja"];
function show_magicians(greet) {
    for (let magicianName of magicianNames) {
        console.log(greet, magicianName);
    }
}
;
show_magicians("Hellow how are you Mr.");
show_magicians("Hellow");
//assigment no 43
let magicianNames2 = ["Ali", "Issa", "tahir", "raja"];
//making a copy of an array
let magicianNameCopy = [...magicianNames2];
function show_magicians2(greet) {
    let withgreetings = "";
    for (let item of magicianNameCopy) {
        withgreetings += `${greet}  ${item}   `;
    }
    return withgreetings;
}
let mygreetings = show_magicians2("Hellow");
let makeArray = mygreetings.split('/n');
console.log(makeArray);
//orignal array
console.log(magicianNames2);
