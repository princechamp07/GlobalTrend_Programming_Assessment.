//Write a function that checks if two given strings are anagrams of each other.

function anagrams(str1,str2){
    str1=str1.replace(/[^\w]/g,'').toLowerCase()
    str2=str2.replace(/[^\w]/g,'').toLowerCase()

    if (str1.length !== str2.length){
        return false
    }

    let charCount1 = {}
    let charCount2 = {}

    for (let char of str1){
        charCount1[char]=(charCount1[char] || 0) +1

    }

    for (let char of str1){
        charCount2[char]=(charCount2[char] || 0) +1
        
    }

    for (let char in charCount1){
        if (charCount1[char] !== charCount2[char]){
            return false
        }
    }

    return true
}

console.log (anagrams("hello","world"))
console.log (anagrams("listen","silent"))