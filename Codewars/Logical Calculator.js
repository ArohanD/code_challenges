// Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.

// Links referring to logical operations: AND, OR and XOR.

// You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

// First Example:

// Input: true, true, false, operator: AND

// Steps: true AND true -> true, true AND false -> false

// Output: false

// Second Example:

// Input: true, true, false, operator: OR

// Steps: true OR true -> true, true OR false -> true

// Output: true

// Third Example:

// Input: true, true, false, operator: XOR

// Steps: true XOR true -> false, false XOR false -> false

// Output: false

// Input:

// boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

// Output:

// calculated boolean

function logicalCalc(array, op){
    if(op === 'AND'){
        return array.reduce(function(a,b){
            return a && b;
        });
    } else if (op === "OR"){
        return array.reduce(function(a,b){
            return a || b;
        })
    } else if (op === "XOR"){
        return array.reduce(function(a,b){
            return !a && b || a && !b;
        })
    }
}


console.log(logicalCalc([true, true, true, false], "AND") === false);
console.log(logicalCalc([true, true, true, false], "OR") ===  true);
console.log(logicalCalc([true, true, true, false], "XOR") ===  true);
console.log(logicalCalc([true, true, false, false], "AND") === false);
console.log(logicalCalc([true, true, false, false], "OR") ===  true);
console.log(logicalCalc([true, true, false, false], "XOR") === false);
console.log(logicalCalc([true, false, false, false], "AND") === false);
console.log(logicalCalc([true, false, false, false], "OR") ===  true);
console.log(logicalCalc([true, false, false, false], "XOR") ===  true);
console.log(logicalCalc([true, true], "AND") ===  true);
console.log(logicalCalc([true, true], "OR") ===  true);
console.log(logicalCalc([true, true], "XOR") === false);
console.log(logicalCalc([false, false], "AND") === false);
console.log(logicalCalc([false, false], "OR") === false);
console.log(logicalCalc([false, false], "XOR") === false);
console.log(logicalCalc([false], "AND") === false);
console.log(logicalCalc([false], "OR") === false);
console.log(logicalCalc([false], "XOR") === false);
console.log(logicalCalc([true], "AND") ===  true);
console.log(logicalCalc([true], "OR") ===  true);
console.log(logicalCalc([true], "XOR") ===  true);