
// Two Sum Problem 

/*
num =[ 1 , 5 , 9]   
target = 10
output = [0,2]
i = 0
j = 1

1 + 5 ? = 10 false
j++
1 + 9 ?= 10 true 

Time complextiy : O(n^2) -> O(n)
Space complextiy : O(1)  -> O(n)

HashMap
num =[ 1 , 5 , 9]   
target = 10

map ={1:0, 5:1, 9:2}
i =2
value = 9

complement_pair = 10 - 9= 1




*/

var twoSum = function(nums, target) {
    var map ={};
    for(var i = 0 ; i<nums.length ; i++){
        var value = nums[i];
        var complementPair = target - value;
        if(map[complementPair] !== undefined){
            return [map[complementPair],i];
        }else{
            map[value] = i ;
        }
        }
    
};

console.log(twoSum[2,7,8] , 9);