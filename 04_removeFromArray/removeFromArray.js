function removeFromArray(array,remove1,remove2,remove3,remove4) {
let newArray = array.filter(array => array !== remove1 && array !== remove2 && array !== remove3 && array !== remove4);
return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
