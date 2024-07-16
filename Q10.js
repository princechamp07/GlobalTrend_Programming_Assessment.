//Write a function that converts a given string to title case (capitalizing the first letter of each word).

function toTitle(str){
    return str.split(' ').map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}

console.log(toTitle("hello world"));