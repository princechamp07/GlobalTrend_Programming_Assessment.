//Write a function that filters out even numbers from an array.

function filterEvenNum(array){
    return array.filter(number => number % 2 !==0)
}

console.log(filterEvenNum([1,2,3,4,5,6]));