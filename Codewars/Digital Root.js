

function digital_root(n) {
    if(n.toString().length === 1){
        return Number(n);
    }
    var nums = n.toString().split('').map(function(el){return Number(el)});
    var reduced =  nums.reduce(function(a,b){ return a+b; })
    return digital_root(reduced);
}

var a = digital_root(456);
console.log(a);