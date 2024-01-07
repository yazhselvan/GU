(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const sum = (function(arr) {
        return arr.reduce(function(acc, num) {
          return acc + num;
        }, 0);
      })(numbers);
  
    console.log("Sum of numbers in the array:", sum);
  })();