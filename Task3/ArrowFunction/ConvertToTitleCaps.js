const stringArray = ["hello world", "welcome to javascript", "title caps example"];

const titleCapsArray = stringArray.map(str => {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
});

console.log(titleCapsArray);