
// Single word palindrome
const Palindrome = (word)=>{

    const trimmedWord = word.replace(/ /g,"")
    const splitedWord = trimmedWord.split("")
    const reversedWord = splitedWord.reverse()
    const toString = reversedWord.join("")
    
    if(trimmedWord.toLowerCase()===toString.toLowerCase()){
        console.log("Voila!!! It is a palindrome")
    }

    else{
        console.log("OOOuch!!! Not a palindrome")
    }

    console.log(toString) 
}

Palindrome("A nut for a jar Of tuna")



// Multiple words palindrome


// const wordsPalindrome = (words)=>{
//     const reversedWords = words.split(" ").reverse()
//     const toStrings = reversedWords.join(" ")
    
//     if(words.toLowerCase()===toStrings.toLowerCase()){
//         console.log("Voila!!! It is a palindrome")
//     }

//     else{
//         console.log("OOOuch!!! Not a palindrome")
//     }

// }

// wordsPalindrome("hello hellO")