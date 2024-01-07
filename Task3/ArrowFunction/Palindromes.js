const strings = ["level", "hello", "madam", "racecar", "world"];

const palindromes = ((arr)=> {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  return arr.filter((word)=> {
    return isPalindrome(word);
  });
})(strings);

console.log(palindromes);