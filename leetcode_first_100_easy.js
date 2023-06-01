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

// 9 palindrome number

const isPalindrome = (x) => {
  return x.toString() === x.toString().split("").reverse().join("");
};

// 13 roman to integer

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

// 14  longest common prefix
const longestCommonPrefix = (strs) => {
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};

// 20 valid parenthesis

const isValid = (s) => {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 21 merge two sorted list
const mergeTwoLists = (l1, l2) => {
  let curr = new ListNode();
  const dummy = curr;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }

  return dummy.next;
};

// 26 remove duplicates from sorted array

const removeDuplicates = (nums) => {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// 27 remove element

const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// 28 find index of first occurance of string

const strStr = (haystack, needle) => {
  if (needle === "") {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
