
// ****************************************** FOR LETTER FRQUENCY ***************************************
const letterFrequency = (phrase) => {
    console.log(phrase);
    let frequency = {};
    for(const letter of phrase){
        if (letter in frequency){
            frequency[letter] = frequency[letter] + 1;
        }else{
            frequency[letter] = 1;
        }
    }
    return frequency;
}

console.log(letterFrequency('haha'));


// ****************************************** FOR WORD FRQUENCY ****************************************** 
const wordFrequency = (phrase) => {
    console.log(phrase);
    let frequency = {};
    const words = phrase.split(' ');        
    for(const word of words){               // Now can also call letterFrequency for rest of the code
        if (word in frequency){
            frequency[word] += 1;
        }else{
            frequency[word] = 1;
        }
    }
    return frequency;
}

console.log(wordFrequency('lol what lol'));


