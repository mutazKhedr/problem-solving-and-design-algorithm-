
// best algrithm for fiboncci numbers  

function fib(n){
    let f = [0,1];

    for(let i = 2 ; i <=n;i++){
        f[i] = f[i - 1] + f[i -2];
    }
    return f[n];
}

console.log(fib(20)); // return 6765 
console.log(fib(100)); // return 354224848179262000000 runtime is very good 
   