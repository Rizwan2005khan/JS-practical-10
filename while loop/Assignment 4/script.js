function isPrime(num) {  
    let divisor = 2;
    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

let number = 2;
while (number <= 100) {
    if (isPrime(number)) {
        console.log(number);
    }
    number++;
}

