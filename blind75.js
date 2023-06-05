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
