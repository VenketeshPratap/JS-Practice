const accID=13444;
let accEmail="venketeshmall2@gmail.com";
var accPass="12345";
accCity="Bangalore";
let accState;
/*
Prefer Not to use var ,Because issue with Block scope and functional scope
*/
console.log(accID);
console.table([accEmail,accID,accPass,accCity,accState]);