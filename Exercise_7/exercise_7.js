

console.log("EXERCISE 7:");

function circleValues(r)
{

    perimeter = 2 * Math. PI * r;
    area = Math. PI * r * r;

    return 'Area :' + area + ' perimeter :' + perimeter;
}

console.log(circleValues(10));


function reverseNum(a)
{
var sum = 0;
var b =0;

while(a > 0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}

return sum;
}

console.log(reverseNum(56481));
console.log(reverseNum(852369));



console.log("Count number of Vowels in String:");

function countNoVowels(str)
{
    var vowelscount = 0;
    var str1 = str.toString();
    var ls1 = str1.length - 1;

    for (var i=0; i<=ls1; i++ )
    {
        if (str1.charAt(i) == "a" || str1.charAt(i) == "e" || str1.charAt(i) == "i" || str1.charAt(i) == "o" || str1.charAt(i) == "u" || str1.charAt(i) == "A" || str1.charAt(i) == "E" || str1.charAt(i) == "I" || str1.charAt(i) == "O" || str1.charAt(i) == "U") 
        {
            vowelscount = vowelscount+ 1;
        }
    
    }
    return vowelscount;


}

console.log(countNoVowels("Am eagle"));



function checkPalindrome(strp1)
{
    var rev = "";
    var strp2 = strp1.toString();
    var ls2 = strp2.length - 1;

    for (var i = ls2; i >= 0; i--) 
    {
        rev = rev + strp2.charAt(i);
    }

    if (strp1 == rev)

    return true;

    else

    return false;

}


console.log(checkPalindrome("amma"));
console.log(checkPalindrome("lord"));


function simpleInt(p , r, t)

{
     interestAmt = p * (r/100) * t ;
     return 'Interest Amount ' + interestAmt;
}

console.log(simpleInt('30000', '3', '5'));



function compoundInt(pr , ra , ti)
{
    var ci;

    ci = pr * (Math.pow((1 + ra / 100), ti)); 

    return 'Compound Interest =' +ci;

}

console.log(compoundInt(1200, 5.4,2));


function letterCount(sttr1){

   return sttr1.length;
}

console.log(letterCount("Write a function to find the count of a letter in a string"));


function checkPrime(numb1)
{

for (var i =2 ; i< numb1/2 ; i++)
{
    if (numb1 % i == 0) 
        fl = true;
        break;
}

if (fl = true )
     return numb1 + ' is a prime number.'
    else
    return numb1 + ' is not a prime  number.'
  

}

console.log(checkPrime(99));


