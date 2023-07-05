let array = [ -33, -58, -100, 52, 53, 54, 21, 8, 1202, -73, 69, -999, -998, 1, 456, -456, 660, 123, -321, -10 ];

function asc(number1, number2) {
return number1 - number2;
}

array.sort(asc);
console.log(array);

array.sort(asc).reverse();
console.log(array);

function getPositive(number) {
return number>=0;
}

function getNegative(number) {
return number<0;
}

let positiveNumbersArray = array.filter(getPositive).sort(asc);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(asc);
console.log(negativeNumbersArray);