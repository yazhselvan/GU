(function() {
    const strings = ["level", "hello", "madam", "racecar", "world"];
  
    const palindromes = (function(arr) {
      function isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
      }
  
      return arr.filter(function(word) {
        return isPalindrome(word);
      });
    })(strings);
  
    console.log(palindromes);
  })();