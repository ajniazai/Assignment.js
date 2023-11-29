
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Ages:", ages);

let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge)

ages.push(100);
console.log("Ages after pushing a value of", "ages")

let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush)

let sumOfAges = 0;
for(let i = 0; i < ages.length; i++) {
  // console.log(i, "Test");
  sumOfAges += ages[i];
  console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
   // console.log(i, "Test");
   totalChars += names[i].length;
   console.log("index:", i, "name:", names[i], "totalChars", totalChars);
}
let averageName = totalChars / names.length
console.log("Average of Names", averageName);

let concatNames = "";
for(let i = 0; i < names.length; i++) {
    //console.log(i, "Test")
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "Names concatenated", concatNames)
}
console.log("last element of ages array:", ages[ages.length - 1]);

console.log("First element of ages array:", ages[0])

let nameLength = [];
for(let i = 0; i < names.length; i++)  {
   // console.log("Test")
   nameLength.push(names[i].length)
    console.log("Name length array:", nameLength)
}

let charsTotal = 0;
for(let i = 0; i < nameLength.length; i++) {
   // console.log(i, "Test")
   charsTotal += nameLength[i];
   console.log("CharsTotal:", charsTotal);
}
function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n);
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3);

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("John", "Bolton")

let numbers1 = [100,200,300,400];
let numbers2 = [1, 2, 3, 4];

function sumNumberArray(array) {
    let total = 0; 
    for(let i = 0; i < array.length; i++) {
      //  console.log(i, "Test")
      total += array[i];
      console.log("Total:", total);
    }
    if (total > 100) {
        console.log("Total:", total, true);
    }
    else {
        console.log("Total:", total,false);
    }
}
sumNumberArray(numbers2);


function calculateNumbersAverage(array) {
    let total = 0;
    for (let i = 0; i < array.lenght; i++) {
      //  console.log(i, "Test")

    total += array[i];
    console.log("calculate Function, total:", total);
}
let average = total / array.lenght;
console.log("Average of Numbers:", average); 
return average;
}

calculateNumbersAverage(numbers2);

let numbers3 = [100, 100, 100, 50];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("Current number loop1:", number, "Total1", total1);
    }
    for (const number of array2) {
        total2 += number;
        console.log("Current number loop2:", number, "Total2", total2);
    }
    let average1 = total1 / array1.lenght;
    let average2 = total2 / array2.length;

    console.log("Average:", average1, average2);
    
    if (average1 > average2) {
        console.log(true);
        return true;
    } else if (average1 < average2) {
        console.log(false);
        return flase;
    } else {
        console.log("Numbers are equal");
    }

}
twoAverages(numbers1, numbers4)

function willBuyDrink(isHotOutside, moneyInPocket) {
console.log("Parameter:", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink", buyDrink);
}
willBuyDrink(5, true)
