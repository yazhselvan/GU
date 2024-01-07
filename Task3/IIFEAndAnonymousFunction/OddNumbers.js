(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    const oddNumbers = numbers.filter(function(num) {
      return num % 2 !== 0;
    });
  
    let oddNumbersArray = [];
    oddNumbers.forEach(function(num) {
      oddNumbersArray.push(num)
    });
    console.log(oddNumbersArray)
  })();