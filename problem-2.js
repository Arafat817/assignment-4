//Problem 2: Finding even or odd

function evenOdd(str){

    if(typeof str != 'string'){
        return 'Provide a string';
    }
    if(str.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
const str= evenOdd('Batch7');
console.log(str);