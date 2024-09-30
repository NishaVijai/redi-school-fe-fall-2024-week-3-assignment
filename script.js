console.log("Week3 - class exercises & assignments");
// OUTPUT: Week3 - class exercises & assignments

// Exercise
// 1. Create 2 variables of type number/integer.
// ○ In a third variable try adding the numbers together.
// ○ Output the result.

let number1 = 10;
let number2 = 20;

let addingTwoNumbers = number1 + number2;

console.log("addingTwoNumbers: ", addingTwoNumbers);
// OUTPUT: addingTwoNumbers:  30

// 2. Create 2 variables of type string (text).
// ○ Try creating a third variable that add them together.
// ○ Output the result.

let string1 = "First";
let string2 = "Name";

let addingTwoStrings = string1 + string2;

console.log("addingTwoStrings: ", addingTwoStrings);
// OUTPUT: addingTwoStrings:  FirstName

// 3. Create 2 variables: a number and a string. Add them together. 
// What do you expect to happen? What happened?

let number3 = 30;
let string3 = "add a string";

let addingNumberAndString = number3 + string3;

console.log("addingNumberAndString: ", addingNumberAndString);
// OUTPUT: addingNumberAndString:  30add a string
// When we try to add a number and a string, it will be concatenated.

// 4. Try re-declaring a const variable → What happened? Anything in the console? Try the same with let.

const NUMBER_CONST = 40;
// The following re-declaration should be inside a comment. If not the script will stop with TypeError message on browser's console. It will not execute the other following code lines.

// NUMBER_CONST = 50;
// OUTPUT: TypeError: Assignment to constant variable.
// variable declared using const keyword, can not be re-declared with a new value.It will cause a TypeError.

let number4 = 60;
number4 = 70;

console.log("number4: ", number4);
// OUTPUT: number4:  70
// variable declared using let keyword, can be re-declared with a new value.

// 5. What is the difference between console.log(myName) and
// console.log(‘myName”) would both run without errors?

// console.log(myName);
// OUTPUT: ReferenceError: myName is not defined
// myName variable is not declared in the script. myName variable should be declared before we try to read its value.

// FIXING: ReferenceError
let myName;
console.log(myName);
// OUTPUT: undefined
// Output is undefined, since myName is initialized in the previous line, but not assigned with any value.

console.log("myName");
// OUTPUT: myName
// Output will be "myName", since console.log is called using one argument "myName". It will be displayed on browser's Console tab.

// *****************************************

// Exercise
// A. Write a function named calculateDogAge that:
// 1. Takes 1 argument: your dog's age.
// 2. Calculates your dog's age based on the conversion rate of 1
// human year to 7 dog years.
// 3. Outputs the result
// 4. Use the result from the function and create an alert with the
// human age of your puppy. Display the result to the screen like
// so: "Your doggie is XX years old in dog years!"

function calculateDogAge(dogAge) {
  const AGE_TO_CALCULATE_WITH = 7;
  let result;
  result = dogAge * AGE_TO_CALCULATE_WITH;

  console.log(`Your dogs age is - ${dogAge}`);
  console.log(`Your doggie is - ${result} years old in human years!`);
  return result;
}

calculateDogAge(5);

// *****************************************

// Exercise
// B. Write a function named moneyToSpendInCoffeUntil80 that:
// 1. Takes 2 arguments: your current age and price for a cup of coffee
// 2. Calculates how much money you will spend if you drink one cup
// of coffee per day until you are 80 years old.

function calculateAgeInDays(age) {
  const ONE_YEAR_IN_DAYS = 365.242199;
  let result;
  result = age * ONE_YEAR_IN_DAYS;
  // console.log(`You have entered - ${age}. You are ${result} days old!`);
  return result;
}

function moneyToSpendInCoffeUntil80(currentAge, priceForACupOfCoffee) {
  const HUMAN_AGE_UNTIL = 80;
  // const HUMAN_AGE_UNTIL = 85;
  const HUMAN_AGE_IN_DAYS = calculateAgeInDays(HUMAN_AGE_UNTIL);
  const CUP_OF_COFFEE_PER_DAY = 1;

  let currentAgeInDays = calculateAgeInDays(currentAge);
  let totalDaysOfDrinkingCoffeeUntil80YearsOld = HUMAN_AGE_IN_DAYS - currentAgeInDays;

  let priceOfCoffeePerDay = CUP_OF_COFFEE_PER_DAY * priceForACupOfCoffee;

  result = (totalDaysOfDrinkingCoffeeUntil80YearsOld * priceOfCoffeePerDay).toFixed(2);

  console.log(`you will spend - ${result} , if you drink one cup of coffee per day until you are 80 years old`);
}

moneyToSpendInCoffeUntil80(30, 20.05);
// moneyToSpendInCoffeUntil80(15, 2.40);
