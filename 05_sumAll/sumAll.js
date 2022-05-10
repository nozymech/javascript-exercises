function sumAll(a,b){
let sum =0
if (a<0 || b<0){
    return 'ERROR'
}
else if (typeof a !== 'number' || typeof b !== 'number'){
    return 'ERROR'
}

else if(a<b){
   for(let i=a; i<b+1; i++ ){
    sum = sum + i
} return sum; 
}
else if(a>b){
    for(let i=b; i<a+1; i++ ){
        sum = sum + i
    } return sum; 
}

}



// Do not edit below this line
module.exports = sumAll;
