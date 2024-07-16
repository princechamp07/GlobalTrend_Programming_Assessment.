//Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array){

    return [...new Set(array)]
}

console.log(removeDuplicates([1,2,2,2,3,3,4,4,5]));