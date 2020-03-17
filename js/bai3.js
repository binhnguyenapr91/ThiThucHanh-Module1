let input = 4;

function isFibonacci(number) {
    if(number<0){
        return false;
    }else if (number < 4){
        return true;
    }
    let status = false;
    let fiboNumber1=1;
    let fiboNumber2=1;
    let fiboNumber3=2;

    while(fiboNumber1+fiboNumber2<=number){
        fiboNumber3 = fiboNumber1 + fiboNumber2;
        fiboNumber2 = fiboNumber1;
        fiboNumber1 = fiboNumber3;
    }
    if(number === fiboNumber3){
        status = true;
    }
    return status;
}
alert(isFibonacci(input));
