let num = 2; 

while (num <= 100) {
    let isPrime = true;
    
    // Check if num is prime using another while loop
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    
    // If num is prime, print it
    if (isPrime) {
        console.log(num);
    }
    
    // Increment num to check the next number
    num++;
}
