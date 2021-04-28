//prev version

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     arr1.forEach(element => {
//         if (arr2.indexOf(element) == -1) {
//             newArr.push(element)
//         }
//     });
//     arr2.forEach(element => {
//         if (arr1.indexOf(element) == -1) {
//             newArr.push(element)
//         }
//     });
//     return newArr;
// }


function diffArray(arr1, arr2) {
    var newArr = arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)))
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);