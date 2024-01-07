(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
  
    const findMedianSortedArrays = function(nums1, nums2) {
      const merged = nums1.concat(nums2).sort();
      const len = merged.length;
  
      if (len % 2 === 0) {
        const mid = len / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
      } else {
        const mid = Math.floor(len / 2);
        return merged[mid];
      }
    };
  
    const median = findMedianSortedArrays(arr1, arr2);
    console.log(median);
  })();