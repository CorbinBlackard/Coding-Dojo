// 1. Given an array and a value Y, count and print the number of array values greater than Y.
var counter = 0;
for(var i = o; i < arr.length; i++){
    if(arr[i] > Y){
        counter++;
    }
}
console.log(counter)

// 2. Given an array, print the max, min and average values for that array.
var sum = 0;
var max = arr[0];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
    sum += arr[i];
}
var avg = sum/arr.length;

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function numToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr
}
console.log(numToString([1,2,-3,-5,5]))

// 4. Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr,x,y){
    var temp = 0
    for(var i = 0; i < y-x+1; i++){
        for(var j = x; j < arr.length-1; j++){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    arr.pop()
    }

    console.log(arr)
    return arr
}
removeVals([20,30,40,50,60,70],2,4)


