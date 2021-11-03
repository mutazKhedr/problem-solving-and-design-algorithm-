

/* 

this code write by Eng : mutaz khedr

solve the binary search using recursive function 

Searcing in a sorted array

input: A sorted array A[low ....... high]

BinarySearch(A , Low , hight , key)
if high < low : 
return low - 1 

mid ->  [low + (high - low / 2) ]

if key = A[mid] :
return mid 
else if key < A[mid] :
    return BinarySearch(A , low , mid - 1 ,key)
else :
return BinarySearch(A , mid + 1 , high , key )   

*/

function BinarySearch(A , low , high , key){
    if(high < low) return low - 1 ;
    let mid = low + Math.floor((high - low)/2)
    if(key == mid) return A[mid];
    else if(key < A[mid]) return BinarySearch(A , low , mid-1 , key);
    else return BinarySearch(A , mid + 1 , high , key);
}
console.log(BinarySearch([3 , 5 , 8 , 10 , 12 , 15 , 18 , 20 , 20 , 50 , 60] , 0 , 10 , 50));  // return 9 