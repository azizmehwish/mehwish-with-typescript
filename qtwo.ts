//let perName:string = ("mehwish aziz");


//console.log(perName.toUpperCase());

//console.log(perName.toLowerCase());
let sentance:string = "i am learning typescript"

let words:string[]= sentance.split(" ");
console.log(words);
let titleCaseName:string = "";

for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() +' '
}
    console.log(titleCaseName);



    

    

