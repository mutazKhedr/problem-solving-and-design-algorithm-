/*

    This code write by : Eng : mutaz khedr 

    Time complexity for linear search : O(n)

input : an array A with n elements A key k 

output : An index , i , where A[i] = k 
if there is no such i , then 
Not Found 

Algorithm:

Recursive solution 
A => is array 

linearSearch(A ,low, high , key)

if(high < low):
return NOT_FOUND 
IF A[low] == key :
return low 

return LinearSearch(A, low + 1 , high , key)

*/

function linearSearch( A , low , high , key){
    if(high < low) return `Not Found`;
    if(A[low] == key) return low;
    return linearSearch(A , low + 1 , high , key); 
}
console.log(linearSearch([10 , 20 , 30 , 40],0 , 3 , 40));