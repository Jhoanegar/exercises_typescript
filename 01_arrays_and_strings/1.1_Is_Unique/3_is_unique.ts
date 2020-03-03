//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
// Hint bit vector
// Goal O(n log n)
let inputUnique : Array<string> = ['1', '2', '3', '4', '5', '6'];
let inputNotUnique : Array<string> = ['1', '2', '3', '4', '5', '1'];


let isAllUnique = true;
let collection = inputUnique;
let numberOfIterations = 0;

collection = collection.sort();
for( let i = 0; i < collection.length ; i++) {
  let item : string = collection[i];
  let nextItem : string = collection[i+1]
  if (!nextItem) {
    break;
  }
  if (item == nextItem) {
    isAllUnique = false
  }
  numberOfIterations++
}

console.log("Is all unique? ", isAllUnique, numberOfIterations)