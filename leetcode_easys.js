// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

// Example 1:

// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#"
// Output: "acz"

var freqAlphabets = function (s) {
  const map = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: `e`,
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  let res = "";

  for (let i = s.length - 1; i >= 0; ) {
    if (s[i] === "#") {
      let n = s[i - 2] + s[i - 1];

      res = map[n] + res;

      i -= 3;
    } else {
      res = map[s[i]] + res;

      i -= 1;
    }
  }

  return res;
};

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  let numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }
  return [];
};
