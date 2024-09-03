const packageWeight = 17;
let costOfShipping;

switch(true){
    case (packageWeight >= 0 && packageWeight < 10):
        costOfShipping = 7;
        break;
    case (packageWeight >= 10 && packageWeight < 20):
        costOfShipping = 12;
        break;
    default:
        costOfShipping = 18;
}
console.log(`The cost of shipping is: $${costOfShipping}`);