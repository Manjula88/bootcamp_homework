
console.log("EXERCISE 8");


var ppl  = ["Greg","James","Mary","Foo", "Devon"] ;

noppl = ppl.length;
console.log(noppl);


for (var i=0; i < noppl; i++ ){
    console.log(ppl[i]);

}



let f1 = ppl.indexOf("Greg");


delete ppl[f1];

console.log(ppl);


let f2 = ppl.indexOf("James");

delete ppl[f2];

console.log(ppl);

ppl[0] = "Matt";

console.log(ppl);

ppl[noppl] = "Manju";

console.log(ppl);


var indexofMary = ppl.indexOf("Mary");

console.log(indexofMary);

var indexofFoo = ppl.indexOf("Fooo");

console.log(indexofFoo);


function findMary()
{
for (var i=0; i < noppl; i++ ){

    console.log(ppl[i]);

    if (ppl[i] = "Mary")
     return i;
    break;

}
}

console.log(findMary());



var ppl2  = ["Greg","Mary", "Devon","" , "Manju"] ;

let f3 = ppl2.indexOf("Devon");

delete ppl2[f3];

console.log(ppl2);

ppl2[2] = "Elizabeth";

console.log(ppl2);

ppl2[3] = "Artie";

console.log(ppl2);


function concatWords(w1,w2) {
    return w1 + ' ' + w2
  }
  
  console.log(concatWords(ppl2, " with bob."));
  
    