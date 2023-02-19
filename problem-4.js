//Problem 4: Finding Bad data

function findingBadData(numbers){
    if (Array.isArray(numbers) != true){
        return 'Povide an array as input';
    }
    let BadData =0;
    for (let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element<0){
            BadData++;
        }
    }
    return BadData;

}
const number= [ 2, -5, -7, -13 ];
const result= findingBadData(number);
console.log(result);