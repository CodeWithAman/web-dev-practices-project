// ------------using the reduce method-----------

var m = 2

function factorial(number) {
    var arr = Array.from(Array(number+1).keys())
    var n = arr.slice(1,).reduce((a,b)=> a*b)
    return n
    }
console.log(factorial(m))


// ---------------------using the for loop -------------------
function forfact(number){
    let fact = 1
    for (let index = 1; index <= number; index++) {
        fact = fact * index
    }
    return fact
}
console.log(forfact(m))