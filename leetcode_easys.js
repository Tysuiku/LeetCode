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

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// var maximumCount = function (nums) {
//   let neg = 0;
//   let positive = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       neg += 1;
//     } else if (nums[i] > 0) {
//       positive += 1;
//     }
//   }

//   return positive > neg ? positive : neg;
// };

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root === null) {
    return 0;
  }

  let sum = 0;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }

  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }

  return sum;
};

// 2496. Maximum Value of a String in an Array
// Easy
// 277
// 15
// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".
// Example 2:

// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation:
// Each string in the array has value 1. Hence, we return 1.

var maximumValue = function (strs) {
  let maxVal = 0;
  for (let str of strs) {
    let isNumber = true;
    let numValue = 0;
    for (let char of str) {
      if (char < "0" || char > "9") {
        isNumber = false;
        break;
      } else {
        numValue = numValue * 10 + (char - "0");
      }
    }
    if (isNumber) {
      if (numValue > maxVal) {
        maxVal = numValue;
      }
    } else {
      if (str.length > maxVal) {
        maxVal = str.length;
      }
    }
  }
  return maxVal;
};

// 1967. Number of Strings That Appear as Substrings in Word
// Easy
// 563
// 30
// company
// Uber
// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3
// Explanation:
// - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".
// 3 of the strings in patterns appear as a substring in word.
// Example 2:

// Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
// Output: 2
// Explanation:
// - "a" appears as a substring in "aaaaabbbbb".
// - "b" appears as a substring in "aaaaabbbbb".
// - "c" does not appear as a substring in "aaaaabbbbb".
// 2 of the strings in patterns appear as a substring in word.
// Example 3:

// Input: patterns = ["a","a","a"], word = "ab"
// Output: 3
// Explanation: Each of the patterns appears as a substring in word "ab".

var numOfStrings = function (patterns, word) {
  let count = 0;
  for (let pattern of patterns) {
    for (let i = 0; i <= word.length - pattern.length; i++) {
      if (word.slice(i, i + pattern.length) === pattern) {
        count++;
        break;
      }
    }
  }
  return count;
};

// You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1. Both arrays may contain duplicates.

// Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the ith element in nums1 appears in nums2 at index j. If there are multiple answers, return any of them.

// An array a is an anagram of an array b means b is made by randomizing the order of the elements in a.

// Example 1:

// Input: nums1 = [12,28,46,32,50], nums2 = [50,12,32,46,28]
// Output: [1,4,3,2,0]
// Explanation: As mapping[0] = 1 because the 0th element of nums1 appears at nums2[1], and mapping[1] = 4 because the 1st element of nums1 appears at nums2[4], and so on.
// Example 2:

// Input: nums1 = [84,46], nums2 = [84,46]
// Output: [0,1]

var anagramMappings = function (nums1, nums2) {
  var map = {};
  for (let i = 0; i < nums2.length; i++) {
    // If the number does not exist in the map, add it
    if (!map[nums2[i]]) {
      map[nums2[i]] = i;
    }
  }

  var result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(map[nums1[i]]);
  }

  return result;
};

// 9. Palindrome Number
// Easy
// 9.7K
// 2.5K
// company
// Amazon
// company
// Facebook
// company
// Adobe
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  return x.toString() === x.toString().split("").reverse().join("");
};

// 27. Remove Element
// Easy
// 45
// 40
// company
// Amazon
// company
// Adobe
// company
// Apple
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  let n = nums.length;
  let k = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
