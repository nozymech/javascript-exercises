const add = function(a, b) {
	return a + b ;
};

const subtract = function(a, b) {
	return a - b ;
};

const sum = function(array) {
  let sum = 0 ;
  for(i=0 ; i<array.length ; i++){
    sum = sum + array[i] ;
  }
  return sum
};

const multiply = function(array) {
  let result = 1 ;
  for(i=0 ; i<array.length; i++){
    result = result*array[i];
  }
  return result;

};

const power = function(a, b) {
	let result = 1;
  for(i=0; i<b; i++){
    result = result*a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for(i=1; i<a+1 ; i++){
    result = result*i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
