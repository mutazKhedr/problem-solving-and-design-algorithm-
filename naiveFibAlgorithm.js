
/*
n :     0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 
fib(n): 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 ,......
*/

function fib(n){
    if(n <= 1) return n ;
    else{
        return fib(n-1) + fib(n-2);
    }
}
console.log(fib(6)); // return  9 ; 

console.log(fib(100)); // it takes alot of time 