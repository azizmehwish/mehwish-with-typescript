
//assigment no 14
//let guestlist:string[] = ["Misbah","Mona","Saima"];
//invite guest for dinner
//guestlist.forEach(invitition => {
   // console.log(`Dear ${invitition} you are invited to dinner`);
    
//});

//assigment no 15
let guestlist:string[]= ["Misbah","Mona","Saima"]

    
 
    
//let absentGuest= "Mona";
//let newGuest="Hira";
//guestlist[1] =newGuest;
//console.log(guestlist);
//guestlist.forEach(dinner => {
  //  console.log(`Dear ${dinner}:"you are invited to dinner"`)
    
//});
//assigment no 16
console.log("Good news,we found a bigger dinner table so we invite  three more guest");
guestlist.unshift("Faira");
guestlist.splice(2,0,"Fatima");
guestlist.push("Aysha");
guestlist.forEach(dinner=> {
    console.log (`Dear ${dinner} :"you are invited to dinner"` );
})
//q no 17
console.log("sorry we can't arrange a bigger dinner table so only two guest are invited");
while (guestlist.length>2) {
   let removeGuest= guestlist.pop();
   console.log(removeGuest,"sorry you  are not invited to dinner");
} 
for (let i = 0; i < guestlist.length; i++) {
    const still = guestlist[i];
    console.log (`${still} you are still invited`);
    
}
guestlist.splice(0,2);
console.log(guestlist);
