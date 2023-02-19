//Problem 1: Let’s play a mind game
function mindGame (numbers){
    if(typeof numbers != 'number' || numbers<0){
        const msg= 'Please enter positive number';
        return msg;
    }
    else{
        const result= ((((numbers*3)+10)/2)-5 );
        return result;
    }
}
const result=mindGame(5);
console.log(result);