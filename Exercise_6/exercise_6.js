



console.log("Exercise - 6:");


var s1 = 5; 
var s2 = 6; 
var s3 = 7; 

var s = (s1 + s2 + s3)/2;

var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));

console.log(area);


console.log("Get the current date:");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;
console.log(today);
console.log(dd);


console.log("Find leapyear :");

function leapyear(year){

    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
}

console.log(leapyear(2016));


