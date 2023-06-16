let twoSum = (nums, target) => {
  numMap = {}; // empty hashmap
  // { 2: 0}

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    // 9 - 2 = 7 first comp is 7
    // 9 - 7 = 2 2nd comp is 2

    if (numMap[comp] !== undefined) {
      return [numMap[comp], i];
    }
    numMap[nums[i]] = i;
    // numMap[2] = 0
  }
};

//Input nums = [2,7,11,15] , target = 9
//Output = [0,1]

let demo = {
  key: "value",
};

// demo[key] = "value"
