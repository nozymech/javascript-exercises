const palindromes = function (s) {
    let multiQuote = /,/gi;
    let multiSpace = / /gi;
    let words = s.replace("!","").replace(".","").replace(multiSpace,"").replace(multiQuote,"").toLowerCase()
    let reverse = words.split("").reverse().join("");
    
    if (words === reverse){
        return true;
    }
    else {
        return false;
    }
    };
    

// Do not edit below this line
module.exports = palindromes;
