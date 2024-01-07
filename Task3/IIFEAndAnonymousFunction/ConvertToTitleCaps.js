(function() {
    const stringArray = ["hello world", "welcome to javascript", "title caps example"];
  
    const titleCapsArray = stringArray.map(function(str) {
      return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    });
  
    console.log("Strings converted to title caps:");
    console.log(titleCapsArray);
  })();