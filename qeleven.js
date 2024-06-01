"use strict";
let names = ["Faria", "Fatima", "zunaira", "Mavia", "Aysha", "Husain"];
//loop method
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(friend => {
    console.log(friend);
});
//for of loop
for (const friendname of names) {
    console.log(friendname);
}
//loop method
for (let i = 0; i < names.length; i++) {
    console.log(`Hellow,${names[i]} How are you?`);
}
