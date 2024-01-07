(function() {
    const arrayToRotate = [1, 2, 3, 4, 5];
    const k = 2; 
  
    const rotateArray = function(arr, rotations) {
      const len = arr.length;
      const kNormalized = rotations % len;
      return arr.slice(kNormalized).concat(arr.slice(0, kNormalized));
    };
  
    const rotatedArray = rotateArray(arrayToRotate, k);
    console.log(rotatedArray);
  })();