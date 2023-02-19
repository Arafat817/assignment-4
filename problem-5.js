//Problem 5: Convert your gems into diamond

function gemsToDiamond(frnd1, frnd2, frnd3){
    if (typeof frnd1 != 'number' || typeof frnd2 != 'number' || typeof frnd3 != 'number')
    {
        return "Provide numbers only";
    }
    const frnd1GemsPower = 21;
    const frnd2GemsPower = 32;
    const frnd3GemsPower = 43;

    let frnd1Diamond = frnd1 * frnd1GemsPower;
    let frnd2Diamond = frnd2 * frnd2GemsPower;
    let frnd3Diamond = frnd3 * frnd3GemsPower;

    let totalDiamond= frnd1Diamond + frnd2Diamond + frnd3Diamond;
    if( totalDiamond> 1000*2 ){
        let result = totalDiamond - 2000;
        return result;
    }
    else {
        return totalDiamond;
    }


}

const Result= gemsToDiamond(20, 200, 50);
console.log(Result);