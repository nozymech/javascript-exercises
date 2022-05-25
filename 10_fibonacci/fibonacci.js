const fibonacci = function(num) {
    let result = 0;
    if (num <= 2 && num >0){
        return 1;
    }else if(num >2){
        result = fibonacci(num-1) + fibonacci(num-2);
    }else{
        return "OOPS"
    }
return result
};

// Do not edit below this line
module.exports = fibonacci;
