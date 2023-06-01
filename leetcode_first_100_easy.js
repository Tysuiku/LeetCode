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

// 3 roman to integer

const romanToInt = (s) => {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let val = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      val -= map[s[i]];
    } else {
      val += map[s[i]];
    }
  }

  return val;
};
