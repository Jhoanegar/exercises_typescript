//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
let inputUnique : Array<string> = ['1', '2', '3', '4', '5', '6'];
let inputNotUnique : Array<string> = ['1', '2', '3', '4', '5', '1'];

interface StringMap {
  [key: string]: string;
}
let record : StringMap = {};


let isAllUnique = true;

for( let i = 0; i < inputUnique.length ; i++) {
  let item : string = inputUnique[i];
  if (record[item] == item) {
    isAllUnique = false
    break;
  } else {
    record[item] = item;
  }
}

console.log("Is all unique? ", isAllUnique)