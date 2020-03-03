//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
// Hint bit vector
// Goal O(n log n)
let inputUnique : Array<string> = ['1', '2', '3', '4', '5', '6'];
let inputNotUnique : Array<string> = ['1', '2', '3', '4', '5', '1'];


let isAllUnique = true;
let collection = inputNotUnique;
let numberOfIterations = 0;
for( let i = 0; i < collection.length ; i++) {
  let item : string = collection[i];
  for ( let j = i - 1 ; j >= 0; j--) {
    let previousItem = collection[j]
    if (item == previousItem) {
      isAllUnique = false
      break;
    }
    numberOfIterations++

  }
}

console.log("Is all unique? ", isAllUnique, numberOfIterations)