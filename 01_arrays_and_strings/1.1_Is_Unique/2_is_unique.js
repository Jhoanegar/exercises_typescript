//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
var inputUnique = ['1', '2', '3', '4', '5', '6'];
var inputNotUnique = ['1', '2', '3', '4', '5', '1'];
var isAllUnique = true;
var collection = inputNotUnique;
var numberOfIterations = 0;
for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    for (var j = i - 1; j >= 0; j--) {
        var previousItem = collection[j];
        if (item == previousItem) {
            isAllUnique = false;
            break;
        }
        numberOfIterations++;
    }
}
console.log("Is all unique? ", isAllUnique, numberOfIterations);
