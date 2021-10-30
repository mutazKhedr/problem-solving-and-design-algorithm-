/*

input : A car which can travel at most L km 
with full tank , a source point A 
, a destination B , and n gas station at 
distance 
x1 <= x2 <= x2 <= .....<= xn in km 
from A along the path from A to B 


output: the minimum number of refills to 
get from A to B besides refill at A.

-----------------------------------------------
solution : Gready Strategy 
- start at A
1- make some greedy choice  => refill at the farthest reachable gas station 
2-reduce to a smaller problem  => make G the new A
3- iterate  => 

1 


time complexity : o(n)

*/

function minfill(distance, miles, n, stations) {

    stations = [...stations, distance]

    let refill = 0,
        limit = miles,
        dt = 0, //distance travelled
        current = 0; //current station

    while (current <= n) {

        if ((Math.abs(stations[current] - stations[current + 1]) > limit) || stations[0] > limit) return -1

        if (Math.abs(dt - stations[current]) <= limit) { 
            current++
        }

        else {
            dt = stations[current - 1]

            refill++
        }
    }
    return refill
}

console.log(minfill(950 , 400 , 6 , [0 , 200 , 375 , 550 , 750 , 950]));