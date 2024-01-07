(function(){
    const arr = [1, 2, 2, 3, 3, 4, 4, 1, 5, 5];

    const uniqueIndex = (function(arr, n){
        arr = arr.sort();
        if(n==0 || n==1){
            return n;
        }
        var temp = new Array(n);
        var j = 0;
        for(var i = 0; i<n-1; i++){
            if(arr[i]!=arr[i+1]){
                temp[j++]=arr[i];
            }
        }
        temp[j++]=arr[n-1];
        
        for(var i = 0; i<j; i++){
            arr[i]=temp[i];
        }
        return j;
    })
    n = arr.length;
    const index = uniqueIndex(arr, n);
    let UniqueArray = [];
    for(var i = 0; i<index; i++){
        UniqueArray.push(arr[i])
    }
    console.log(UniqueArray);
})();