//assigment no 37

//Modify the make_shirt() function 
//function make_shirt(size:string,lable:string){
  //  return size+lable
//}
//let myshirt=make_shirt("large", "I love typescript");
//console.log(myshirt);

//function make_shirt(lable:string,size:string="large"){
  //  return size+lable
//}
//let myshirt=make_shirt( " I love typescript");
//console.log(myshirt);
//function make_shirt(lable:string,size:string="medium"){
  //  return size+lable
//}
//let myshirt=make_shirt( "I love typescript");
//console.log(myshirt);
function make_shirt(lable:string,size:string){
    return size+lable
}
let myshirt=make_shirt(" any size", "I love typescript");
console.log(myshirt);
//assigment no 38
//a function called describe_city() that accepts the name of a city and its country. 
function describe_city(nameofCity:string,country:string="Pakistan"){
    return`${nameofCity} is in ${country}`
}
let city1= describe_city("Karachi");
let city2=describe_city("hyderabad");
let city3=describe_city("Lahor");
let city4=describe_city("Dubai","UAE");

console.log(city1);
console.log(city2)
console.log(city3)
console.log(city4);
//assigment no 39
// a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city:string,country:string){
    return`${city} ,${country}`


}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Dubai","UAE"));
console.log(city_country("London ","United kingdom"));
console.log(city_country("Riyaz","saudi arabia"));
//assigment no 40
// a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title.
function make_album (artistName:string,albumTitle:string){
    return{artistName, albumTitle}
}
let album1 =make_album("Ali","Rang Mohabt");
let album2=make_album("Hira","Raz Mohabt");
let album3=make_album("Sana"," Mohabt ya Nafrat");
 let album4=make_album("Arif","Intaqam");
 console.log(album1)
 console.log(album2)
 console.log(album3)
 console.log(album4);
 

function make_album2 (artistName:string,albumTitle:string,numberOftracks?:number){
    return{artistName, albumTitle,numberOftracks}
}
let albuma =make_album2("Ali","Rang Mohabt",38);
let albumb=make_album2("Hira","Raz Mohabt",47);
let albumc=make_album2("Sana"," Mohabt ya Nafrat",89);
 let albumd=make_album2("Arif","Intaqam");
 console.log(albuma)
 console.log(albumb)
 console.log(albumc)
 console.log(albumd);