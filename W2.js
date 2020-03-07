  /*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
  let str = strArr.join().split(',');
  let rts = str.map(noSpace => noSpace.trim().replace(/\//g, ''));
  for(let i=0; i< rts.length; i++){
   rts[i] = rts[i].toLowerCase();
    console.log(rts[2]);
  }
  console.log(rts);
  return rts;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if(num === Number(num) && num % 2 === 0 && num <= 100){
      return true; 
    }else{
      return false;
    }
  }


/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

/*function remove(arr, index) {
  let k = 0;
  
  let removeElement = arr.slice(0, index);
  console.log(removeElement);
  return removeElement; // complete this statement
}*/

function remove(arr, index) {
  arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != index) {
      arr1.push(arr[i]);
    }
  }
  console.log(arr1);
  return arr1;
}
let tddt = [10,20,30,40,50]
let ddt = tddt.slice(0,3);
let d2t2 = tddt.splice(3,1);
console.log(ddt);
console.log(d2t2);

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  
  /*let oneH = arr.map(num => num > 100 ? `100%`: num.toFixed(2)/1 + "%");
 
  let dollars = arr.map(number => number.toFixed(2)/1 + '%');
 
 
  console.log(oneH);
  return oneH;*/
  let array = arr;
  let strA= [];
  let numRound=[];
  for(let i = 0; i< array.length;i++){
    numRound[i] = Math.round(array[i]);
    if(numRound[i]> 100){
      numRound[i] = 100;
    }
    strA.push(numRound[i]);
    strA[i] = `${numRound[i]}¥`;
    
  }
  return numRound;
  
 /* let str = arr.join().split(',');
  let format = str.join('%,');
console.log(format);*/
}
console.log(formatPercentage([120,13.4,5.60,79]));
/*function formatPercentage(arr) {
  arr1 = [];*/

  /* Math.Ceil of any positive float between 0 and 1 is 1
      and I target those numbers such as 0.434 or 0.3
      and I have added 2 digit in fractional part
      but the number is not one 
  */

 /* for (i = 0; i < arr.length; i++) {
    newnum = arr[i] > 100 ? 100 : arr[i];
    newnum =
      Math.ceil(newnum) === 1 && !(newnum === 1) ?
      `${newnum.toFixed(2)}%` :
      `${newnum}%`;
    arr1.push(newnum);
  }

  return arr1;
}*/

console.log(formatPercentage([23,18, 187.2, 0.5346]));

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh"
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292,  29])
);
test(
  "remove function works - case 1",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%"
  ])
);