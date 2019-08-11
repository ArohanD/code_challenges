// Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.

// The binary number returned should be a string.


const addBinary = (a, b) => {
    let sum = a + b;
    let string = '';
    while (sum > 0.5){
        string += sum % 2;
        sum /= 2;
        sum = Math.floor(sum);
    }
    return string.split('').reverse().join('');
}

console.log(addBinary(1,2)) //11
console.log(addBinary(7,6)) //1101
console.log(addBinary(100,74)) //10101110

var a = 3;
console.log(a.toString(2))