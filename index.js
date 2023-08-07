function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}


/* 
  I don't know
*/

/* 
  get first element of the array and add it to the rest of the rest of the elements
  get the second element and add it to the rest (except the first)
  do this until iterate the last minus -1 element

  3 + 8, 3+12, 3+4, 3+ 11, 3 + 7, 
  8 + 12, 8+4, 8+11, 8+7
  12 + 4, 12+11, 12+7
  4+11,4+7
  11 + 7

if the addition of a pair === the target number return true else return false
  

/*
  Write a function that returns true if any pair number add up to a target number. Function takes two arguments: array containing numbers and the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
