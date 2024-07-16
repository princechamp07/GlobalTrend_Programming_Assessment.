//Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalizes(str){
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}

console.log(capitalizes("hello world"));