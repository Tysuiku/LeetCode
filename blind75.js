//1
const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

//121
const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let val = prices[i] - minPrice;
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (val > maxProfit) {
      maxProfit = val;
    }
  }

  return maxProfit;
};

//217
const containsDuplicate = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }
  return false;
};

//238
const productExceptSelf = (nums) => {
  let length = nums.length;

  let answer = [];
  answer[0] = 1;

  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }

  return answer;
};
// testing windows setup environment
