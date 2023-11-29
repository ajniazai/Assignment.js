
let firstName = 'Mickey';
let lastName = 'Mouse';
let street = '1 Main St.';
let city = 'Disneyland';
let state = 'CA';

console.log(
`${firstName} ${lastName} lives at 
${street} 
${city}, ${state}.`);


const powerFunction = (base, exp) => { return base**exp };

console.log(powerFunction(2,2));
console.log(powerFunction(4,2));
console.log(powerFunction(2,4));

const power = (base, exp) => {
    let result = 1;
    for (let count = 0; count < exp; count++) {
    result *= base;
    }
    return result;
    };
    
    console.log(power(2,2));
    console.log(power(4,2));
    console.log(power(2,4));

    function updateBrand(obj) {
        // Mutating the object is visible outside the function
        obj.brand = "Toyota";
        // Try to reassign the parameter, but this won't affect
        // the variable's value outside the function
        obj = null;
      }
      
      const car = {
        brand: "Honda",
        model: "Accord",
        year: 1998,
      };
      
      console.log(car.brand); // Honda
      
      // Pass object reference to the function
      updateBrand(car);
      
      // updateBrand mutates car
      console.log(car.brand); // Toyota
    

const booleanFlag = true;
let trueOrFalse = new Promise((resolve, reject) => {
if (booleanFlag) {
resolve("The flag is true!");
} else {
reject("The flag is false!");
}
});
// This will print out the promise that you've just declared
console.log(trueOrFalse);

trueOrFalse
.then(function successValue(result) {
console.log(result);
})
.then(function successValue2() {
console.log("You can call multiple functions this way.");
})
.catch(function failureValue(reject) {
console.log(reject);
});



