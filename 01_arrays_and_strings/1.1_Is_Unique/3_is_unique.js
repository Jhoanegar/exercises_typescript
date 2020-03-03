//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
// Hint bit vector
// Goal O(n log n)
var inputUnique = ['1', '2', '3', '4', '5', '6'];
var inputNotUnique = ['1', '2', '3', '4', '5', '1'];
var isAllUnique = true;
var collection = inputUnique;
var numberOfIterations = 0;
collection = collection.sort();
for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    var nextItem = collection[i + 1];
    if (!nextItem) {
        break;
    }
    if (item == nextItem) {
        isAllUnique = false;
    }
    numberOfIterations++;
}
console.log("Is all unique? ", isAllUnique, numberOfIterations);
