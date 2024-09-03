function factorial(num) {
      let result = 1;
    let i = 1;

    do {
        result *= i;
        i++;
    } while (i <= num);

    return result;
}

console.log(factorial(4)); 
