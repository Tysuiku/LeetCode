// 1 two sum

let twoSum = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
  return [];
};

// 2 palindrome number

const isPalindrome = (x) => {
  return x.toString() === x.toString().split("").reverse().join("");
};
