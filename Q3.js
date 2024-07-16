//Write a function that takes a nested array and returns a flattened array.

function flattenArray(nestedArray){
    let flatArray=[]
    
    function flat(element){
        if(Array.isArray(element)){
            for(let item of element){
                flat(item)
            }
        }

        else{
            flatArray.push(element)
        }
    }
    flat(nestedArray)
    return flatArray
}

console.log(flattenArray([1,[2,[3,4],5],6]))