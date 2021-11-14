
// merge sort algorithm using recursive  

// time complexity for this algorithm : O( n log n ) this is the best for sort 


//left array and right array are sorted 
function merge(leftArray , rightArray){
    const outPut = [];
    let leftIndex = 0 ;
    let rihgtIndex = 0 ;
    
    while(leftIndex < leftArray.length && rihgtIndex < rightArray.length){
        const leftEl = leftArray[leftIndex];
        const rightEl = rightArray[rihgtIndex];
        if(leftEl < rightEl){
            outPut.push(leftEl);
            leftIndex++;
        }else{
            outPut.push(rightEl);
            rihgtIndex++;
        }

    }
    return [...outPut,...leftArray.slice(leftIndex) , ...rightArray.slice(rihgtIndex)];
}

//recursive 
function mergeSort(array){

    if(array.length <=1) {
        return array;
    }
        const middle = Math.floor(array.length / 2);
        const leftArray = array.slice(0 , middle);
        const rightArray = array.slice(middle , array.length);
    
    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}
console.log(mergeSort([1,4,2,8,345]));

/*
[ 1 , 4 , 2 , 8 , 345]

[1 , 4 , 2 ]  [ 8 , 345]

[1 , 4 ]   [ 2 ]  [ 8 ] [ 345]

[1] [4]  [2]       [8]  [345]


[1 , 4]  [2,8] [345]

[1 , 2 , 4 , 8]  [345]

[ 1 , 2 , 4 , 8 , 345 ]



*/