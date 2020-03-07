/*const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
  console.log('the # is ' + number);
  console.assert(number % 2 === 0, `${number}`, `${errorMsg}` );
  // or, using ES2015 object property shorthand:
  // console.assert(number % 2 === 0, {number, errorMsg});
} */
function a(){
  console.log('Testing This this');
  let aB= b(3);
  return aB;
}
function b(c){
  
 if(!this.v){
   const bB = new Array(4).fill(undefined).map((_, j) => { return
    Math.floor(Math.random()*6) + 1;
    
   });
   console.log(bB.length);
  console.log(bB);
  this.v = bB;
 }
 
  return this.v.includes(c);
}
function d(){
 let v = a();
 console.log('this is d.')
  
}
//a();
d();
b();



/**
 * Finding a radio station, and a good one, can be hard manually.
 * Let's use some code to help us build a program that helps us scan
 * the radio waves for some good music.
 */

/**
 * First, let's create a function that creates a list of all the frequencies.
 * Call this function `getAllFrequencies`.
 *
 * This function should:
 * - Create an array  starting at 87 and ending in 108
 * - Should return this array to use in other functions
 */

// `getAllFrequencies` goes here
function getAllFrequencies(){
  let frequencies = [];
  /*let Freqs = Math.floor(Math.random() * (10800 - 8700 + 1) + 8700) / 100;*/
  for(let i = 87; i < 109; i++){
    
  
    frequencies.push(i);
    
  }
 
 return frequencies; 
}
console.log(getAllFrequencies()[0]);



/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioFrequency that takes an integer as an argument and returns a boolean.
 * - Sort the stations by low - high e.g. 1,2,3,4,5
 * - Return only the frequencies that are radio stations.
 */
// `getStations` goes here
function getStations(){
  
  let F = getAllFrequencies();
 /* let aFs = F.map(isRadioStation).forEach(function(frequency, index)
  {
    console.log(index + ": " + frequency);
  });
 
 return aFs;*/
 let aF = F.filter(isRadioStation);
 console.log(aF);
 
 return aF;
 
}
    
 // console.log(getStations());
  

function isPrime(num){
  if(isPrime.cache[num]!= null){
    return isPrime.cache[num];
  }
  var prime = num !=1;
  for(var i = 2; i < num; i++){
    if(num%i == 0 ){
      prime = prime + i;
      console.log(`${num} is noy ${prime}`);
      //break;
    }
  }
  isPrime.cache[num]= prime;
  return prime;
}
isPrime.cache ={};

let pim = isPrime(8);
console.log(pim);

/**
 * Lastly, let's make a function for people to use.
 * When this runs, it should use the above two functions to log to the `console`
 * Call this function `searchRadioWaves`.
 * - "🎶 station found at ${frequency}, enjoy!"
 * - "No station found at ${frequency}, moving on"
 */
// `searchRadioWaves` goes here

/* ======= TESTS - DO NOT MODIFY ======= */

function isRadioStation(frequency) {
  // This is a way of storing the random frequency array inside a 
  // function as storing it outside is bad practice. Don't worry if you
  // don't understand some bits! You're more than welcome to ask questions
  // at any time. :)
  if (!this.stations) {
    const stationCount = 4;
    const availableStations = new Array(stationCount)
      .fill(undefined)
      .map((_, i) => {
        return Math.round(Math.floor(Math.random() * (10800 - 8700 + 1) + 8700) / 100);
      });

    this.stations = availableStations.sort(function(a,b) {return a-b});
    console.log(this.stations);
  }
  // console.log(availableStations);
  

  return this.stations.includes(frequency);
}


//const assert = require("assert");

function test(testName, fn) {
  try {
    fn();
    console.log(`${testName}: PASS`);
  } catch (e) {
    console.log(`${testName}: FAIL`);
  }
}

test("getAllFrequencies", () => {
  const freqs = getAllFrequencies();
  assert((freqs.length = 22 && freqs[0] === 87 && freqs[21] === 108));
});

test("getStations", () => {
  const stations = getStations();
  console.log(isRadioStation(stations));
  assert(
    JSON.stringify(stations) === JSON.stringify(isRadioStation.this.stations.sort()));
});