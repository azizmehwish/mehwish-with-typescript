//assigment no 18
let locationName:string[]=["islamabad","pishawer","karachi","lahor"];
console.log("orignal order",locationName);
console.log("alphabatical order",locationName.slice().sort());
//  array is still in its original order by printing it.
console.log("orignal order",locationName);
// array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order",locationName.slice().sort().reverse());
//r array is still in its original order by printing it again.
console.log("orignal order",locationName);


// Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse order change",locationName.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been chanist again. Print the list to show it’s back to its original order.
console.log("orignal order",locationName.sort());
console.log(locationName);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("reverse alphabatical order change",locationName.sort().reverse()); 
console.log(locationName) ;