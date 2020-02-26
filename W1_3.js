// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  let pick_random = Math.floor(Math.random() * 4) + 1;  // returns a random integer from 1 to 10
  /*let rounded = Math.floor(pick_random);
  return rounded;*/
  return pick_random;
}
console.log(getNumber());

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return 
  return firstWord +" " +secondWord+" "
+ thirdWord;
  
}

/* ======= TESTS - DO NOT MODIFY ===== */
let firstTest = concatenate('I','like','Pizza.');
console.log(firstTest);

/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(priceTag) {
  let originalPrice = (priceTag * 0.2)+priceTag;
  return originalPrice;
  
  
}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency(price) {
  let fc = calculateSalesTax(price);
 // return `£ ${Math.ceil(fc)}`;
    return fc.toFixed(2);
  
}

/* ======= TESTS - DO NOT MODIFY ===== */
let t = calculateSalesTax(16.8);
let c = formatCurrency(32.64);
console.log(t); 
console.log(c);

/* Below are the possible answers:

  # # Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.

# # Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

# # Negative
Reply hazy,
try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

# # Very negative
Don 't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.*/

// This shou&&ld log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  console.log("The ball has shaken!");
   switch (randomNumber) {
    case 1:
      answer = "very positive";
      break;
    case 2:
      answer = "positive";
      break;
    case 3:
      answer = "very negative";
      break;
    case 4:
      answer = "negative";
      break;
  }
  console.log(answer);
  
   return answer;
  
}

// The answer should come from shaking the ball
 let randomNumber = getNumber();
 let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  switch (answer) {
    case "very positive":
     /* It is certain.
      It is decidedly so.
      Without a doubt.
      Yes - definitely.
      You may rely on it.*/
      return "very positive";
      
    case "positive":
      return "positive";
      
    case "negative":
    case "Reply hazy,try again.":
    case "Ask again later.": 
    case "Better not tell you now.":
    case "Cannot predict now.":
    case "Concentrate and ask again.":
      return "negative";
      
    case "very negative":
    case "Don't count on it.":
    case "My reply is no.":
    case "My sources say no.":
    case "Outlook not so good.":
    case "Very doubtful.":
      return "very negative";
     
  }
    
}



shakeBall();
let passed = checkAnswer(answer);
console.log(passed);
/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/
const commission = 0.01;

function convertToUSD(amount) {
  return amount * 1.4;
  
}

/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToBRL(amount) {
  let ex = amount * 5.7;
  let add_commission = (ex * commission) + ex;
  return add_commission;
}


console.log(convertToUSD(32));
console.log(convertToBRL(30));


/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(a, b) {
  let decimal = a + b;
  let precision = decimal.toFixed(1);
return precision;
}

function multiply(a, b) {
  return a * b;

}

function format(number) {
  return `£${number}`;

}

const startingValue = 2

// Why can this code be seen as bad practice? Comment your answer.
let badCode = format(multiply(2,add(startingValue,10)));

  /* BETTER PRACTICE */
  let addition = add(startingValue,10);
  let multiplication = multiply(addition,2);
  let formation = format(multiplication);

 let goodCode = formation;

/* ======= TESTS - DO NOT MODIFY ===== */
console.log(badCode);
console.log(`GoodCode is ${goodCode} and Best Practice :)`)

console.log(add(1, 3));

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];

function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();


function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED"
  } else {
    status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('convertToUSD function works', convertToUSD(32) === 44.8)
test('convertToBRL function works', convertToBRL(30) === 172.71)