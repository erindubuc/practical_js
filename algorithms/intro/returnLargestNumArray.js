function largestOfFour(arr) {
  var answer = [];
  
  for (var i = 0; i < arr.length; i++) {
    var biggestNumber = 0;
    arr[-1] = "property does not add to array length";
    for(var sI = 0; sI < arr[i].length; sI++){
      if(arr[i][sI] > biggestNumber){
        biggestNumber = arr[i][sI];
      }
    }
    answer[i] = biggestNumber;
  }
    return answer;
    
  }
  


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));