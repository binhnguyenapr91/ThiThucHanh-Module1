let input = 13;

function isFibonacci(number) {
    let status = false;
    if(number<0){
        status = false;
    }else if(number === 1 || number === 0){
        status = true;
    }else if(number === (number-1) + (number-2)){
        status = true;
    }
    return status;
}

alert(isFibonacci(input));