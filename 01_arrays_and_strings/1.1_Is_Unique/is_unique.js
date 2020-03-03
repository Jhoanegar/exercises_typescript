//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures ?
var inputUnique = ['1', '2', '3', '4', '5', '6'];
var inputNotUnique = ['1', '2', '3', '4', '5', '1'];
var record = {};
var isAllUnique = true;
for (var i = 0; i < inputUnique.length; i++) {
    var item = inputUnique[i];
    if (record[item] == item) {
        isAllUnique = false;
        break;
    }
    else {
        record[item] = item;
    }
}
console.log("Is all unique? ", isAllUnique);
