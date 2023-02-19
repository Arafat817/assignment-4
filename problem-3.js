//Problem 3: Is Less or Greater than seven

function isLGSeven(number){
    if (typeof number != 'number'){
        return 'Provide a number';
    }
    const diff = number-7;
    if (diff<7){
        const result1=number-7;
        return result1;
    }
    else{
        const result2= number * 2;
        return result2;
    }
}
const Result = isLGSeven(-15);
console.log(Result);