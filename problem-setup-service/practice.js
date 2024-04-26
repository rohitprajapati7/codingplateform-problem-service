var shortestCompletingWord = function(licensePlate, words) {

    let str = "";
    let wordMin = "";

    for(let x of licensePlate){
        if(isNaN(x.trim())){
            str += x;
        }
    }

    for(let i =0; i<words.length; i++){
        let count = 0;
        let val = words[i];
        const convertToCaseSensitive = str.toLowerCase();

        for(let j = 0; j <convertToCaseSensitive.length; j++){
            if(val.includes(convertToCaseSensitive[j])){
                val = val.replace(convertToCaseSensitive[j], "");
                count ++;
            } else {
                break;
            }
            if(count === convertToCaseSensitive.length){
                console.log('output =',wordMin.length, words[i].length);
                if(!wordMin ||  words[i].length < wordMin.length) {
                    wordMin = words[i]
                }
            }
        }

    }
    return wordMin;
};

const licensePlate = "1s3 456",
words = ["looks","pest","stew","show"];

shortestCompletingWord(licensePlate, words);