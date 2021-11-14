

// selection sort algorithm 

// time complexity for the algorithm : O(n^2)

function selectionSort(array){

    for(let i =0 ; i < array.length;i++){
        let min = i ;
        for(let j = i + 1 ; j <array.length;j++){
            if(array[i] < array[j]){min = j;} 
        }
        let temp  = array[i];
        array[i] = array[min] ;
        array[min] = temp;
    
    }
    return array;

}

console.log(selectionSort([8 , 4 , 2 , 5 , 2]));