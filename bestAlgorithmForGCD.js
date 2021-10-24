
// this code write by Eng: moataz khedr 
/*

Hint :
a` = % a/b 
gcd(a ,b) = gcd(a` , b) =gcd(b , a`)

rule : gcd(a , b) = (b , a mod b)

*/
 
function gcd  (a, b)  {
    //if num2 is 0 return num1;
    if(b === 0){
       return a;
    }
    
    //call the same function recursively
    return gcd(b, a % b);
 
 }
 console.log(gcd(60, 15));
 console.log(gcd(36, 60));
 