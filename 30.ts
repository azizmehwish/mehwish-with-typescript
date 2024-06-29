// a array of five or more usernames, including the name 'admin'. 
const userName:string[]=["admin","asad","ali","tariq","raja"];
for (let i = 0; i < userName.length; i++) {
    if( userName[i]==="admin"){
    console.log(" Hello admin, would you like to see a status report? ")
    } 
    else{
        console.log(" Hello" ,`${userName[i]}`," thank you for logging in again.")
    }
}
//assigment no 31
let noUser:string[]=['admin','haya','hira','hina'];
if(noUser.length===0){
    console.log(" We need to find some users!")
}
else{
noUser=[]
console.log("all user name has been removed",  noUser.length);
}
//assigment no 32
//• Make a list of five or more usernames called current_users.
let current_users:string[]=['faRah','JhOn','RaJa','Ali','sara'];
//• Make another list of five usernames called new_users.
let new_users:string[]=['Issa','Moosa','Ali','faRah','mirha'];
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(new_users => {
    let new_usersLower=new_users.toLowerCase();
    let userNametaken= current_users.some(current_users => current_users.toLocaleLowerCase()===new_usersLower);

    if(userNametaken){
        console.log(` ${new_users} needto chose a new username because it's already taken`);
    }
    else{
        console.log(` ${new_users} is the new member added`);
        current_users.push(new_users);
        
    }

})
console.log(current_users);
//assigment no 33
let myNumber =[1,2,3,4,5,6,7,8,9];
for (let i = 0; i < myNumber.length; i++) {
    if(myNumber[i]== 1){
        console.log(`${myNumber[i]}st`);
    }else if(myNumber[i]==2){
        console.log(`${myNumber[i]}nd`)
    }
    else if(myNumber[i]==3){
        console.log(`${myNumber[i]}rd`)
}else if(myNumber[i] >=4&& myNumber[i]<=9){
    console.log(`${myNumber[i]}th`)
}
};
//assigment no 34
//: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let myPizza:string[]=["vegi pizza","cheeze pizza","pepperoni pizza"];
for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
    
}
for (let i = 0; i < myPizza.length; i++) {
    console.log(`I like to eat ${myPizza[i]}`);
    
}
console.log(` I really love pizza!`);
    

