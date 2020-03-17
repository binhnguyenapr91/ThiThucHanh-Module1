let input = [3, 6, 5, 4, 5, 7, 8];
let x = 5;

function tryRemoveFromArray(arr, number) {
    let returnedArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === number) {
            continue;
        } else {
            returnedArray.push(arr[index]);
        }
    }
    return returnedArray;
}

alert(tryRemoveFromArray(input, x));