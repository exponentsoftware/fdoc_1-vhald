
function reverseArray(arr) {
    return arr.map((elem, index, arr) => arr[arr.length - index - 1]);
}


console.log(reverseArray(["A", "B", "C"]));