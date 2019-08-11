// You are going to be given an array of integers. Your job is to take that array and find an 
// index N where the sum of the integers to the left of N is equal to the sum of the integers 
// to the right of N. If there is no index that would make this happen, return -1.

const findEvenIndex = (arr) => {
    for(let i = 0; i < arr.length; i++){
        var left = arr.slice(0, i).reduce((a,b) => a + b, 0)
        var right = arr.slice(i + 1, arr.length).reduce((a,b) => a + b, 0);
        if(left === right) return i;
    }
    return -1;
    
}

function addAll(a,b){
    return a + b;
}



console.log(findEvenIndex([1,2,3,4,3,2,1])) //3
console.log(findEvenIndex([1,100,50,-51,1,1])) //1
console.log(findEvenIndex([1,2,3,4,5,6])) // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])) //3
console.log(findEvenIndex([10,-80,10,10,15,35,20] )) //3

var a = [1,2,3,4,5]
console.log(a.reduce((a,b) => a+b, 7))