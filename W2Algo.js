let x = 2;
let a = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
//console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);

    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
  
}

function sortAges(arr) {
  let newArr =[];
  let assortedNewArr = [];
  let temp;
  for(let i = 0; i < arr.length; i++){
    if( typeof arr[i] === 'number'){
      newArr.push(arr[i]);
      
    }
  }
  for(let h =0;h < newArr.length;h++){
    for (let j = h + 1; j < newArr.length; j++)
    {
   
      if (newArr[h] > newArr[j])
      {
        temp = newArr[h];
        newArr[h] = newArr[j];
        newArr[j] = temp;
        assortedNewArr = newArr;
      }
     }
    }
  
  console.log(assortedNewArr);
  return assortedNewArr;

}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = ['🎹', 100, '💩', 55, '🥵', '🙈', 45, '🍕', 'Sanyia', 66, 'James', 23, '🎖', 'Ismeal']
const agesCase2 = ['28', 100, 60, 55, '75', '🍕', 'Elamin']

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
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);