
function reverseString(){
let stringValue = "Hello world"
let reverseStr = ""

let i = stringValue.length - 1
while (i >= 0){
    reverseStr += stringValue[i]
    i--
}

return reverseStr
}
console.log(reverseString())