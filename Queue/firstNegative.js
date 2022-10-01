let slidingWindow = function(arr, k) {
    let deq = [];
    let ans = [];
    let l =0, r=0;
    while(r<arr.length){
      while(deq.length && arr[deq.at(-1)]<0){
        deq.pop();
      }
      deq.push(r);
      if(deq[0]<l) deq.shift();
      
      if(r+1>=k){
        ans.push(arr[deq[0]]);
        l++;
      }
      r++;
    }
    return ans;
  };


console.log(slidingWindow([-2,0,-3,-4],2))