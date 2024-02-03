




function printMyName() {
    console.log('Manjula')
   
     }
   
     printMyName();
   
   
console.log("The Fortune Teller:");     
function tellFortune(a,b,c,d) {

    return 'You will be a '  + a + ' in ' + b + ', and married to ' + c + ' with ' + d + ' kids.'
}

console.log(tellFortune('Engineer','USA','Saravanan','2'));

console.log(tellFortune('Cashier','India','John','3'));

console.log(tellFortune('Business Man','India','Mary','3'));


console.log("The Puppy Age Calculator:");

function calculateDogAge(PuppyAge)
{
    N = PuppyAge * 7

   return 'Your doggie is ' +  N + ' years old in dog years!'
}
console.log(calculateDogAge(5));
console.log(calculateDogAge(3));

console.log(calculateDogAge(6));

console.log("The Lifetime Supply Calculator:");

function calculateSupply(age,amountperday)
{
    supply = age * amountperday * 365

    return 'You will need ' + supply +  ' to last you until the ripe old age of ' +  age 
}

console.log(calculateSupply(60,2));
console.log(calculateSupply(65,1.5));
console.log(calculateSupply(70,1));

console.log("The Geometrizer:");

function  calcCircumfrence(r){

    cir = 2 * Math. PI * r
    return 'The circumference is ' + cir
    
}


function calcArea(r)
{
    area = Math. PI * r * r
 
    return  'The area is ' + area
}

console.log(calcCircumfrence(6));

console.log(calcArea(6));


console.log("The Temperature Converter:");

function celsiusToFahrenheit() {

    var celsius = 10;
    fahrenheit = ( celsius * 9/5) + 32;

    return   celsius  +'C  is ' + fahrenheit + 'F';
}

 console.log(celsiusToFahrenheit());


 function fahrenheitToCelsius(){

    fahrenheit = 67;
    celsius = (fahrenheit - 32 ) * 5/9 ;
    
    return fahrenheit + 'F is ' + celsius + 'C.'


 }

 console.log(fahrenheitToCelsius());