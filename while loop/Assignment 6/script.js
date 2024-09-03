let str1 = "rotator"
let str2 = ""
let i = str1.length -1
while(i>=0){
    str2 += str1[i]
    i--
}
if(str1 == str2){
    console.log("The string is a palindrome")
} else {
    console.log("The string is not a palindrome")
}