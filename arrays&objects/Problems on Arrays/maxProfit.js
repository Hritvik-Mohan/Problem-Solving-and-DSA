function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let profit = prices[i] - prices[j];
        maxProfit = Math.max(maxProfit, profit);
      } else {
        break;
      }
    }
  }
  return maxProfit;
}

// function maxProfit(prices) {
//     let maxProfit = 0;
//     let profit = 0;

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i+1; j < prices.length; j++) {
//             if(prices[i] < prices[j]) {
//                 profit = prices[i] - prices[j];
//                 maxProfit = Math.max(maxProfit, profit);
//             }
//         }
//     }

//     return maxProfit;
// }

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))
