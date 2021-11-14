
// this code write bt ENG : MUTAZ KHEDR ;

// counting sort algorithm   

// time complextiy for this algorihtm is : O(n)  faster algorihtm for special case ;


function countingSort(arr){
    var count = []; // This helper will note how many times each number appeared in the arr
                     
    for(var i = 0; i<arr.length; i++){
      if(!count[arr[i]]){
          count[arr[i]] = 1;
      }else{
          count[arr[i]] += 1;
      }
    }
  
    var newArr = []; 
    for(i in count){
      while(count[i]>0){
          newArr.push(parseInt(i));
          count[i]--;
      }
    }
    return newArr; 
  }
  

  console.log(countingSort([5,4,3,2,1,0])); // [0, 1, 2, 3, 4, 5]
  