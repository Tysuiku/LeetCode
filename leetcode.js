//347

function topKFrequent(nums, k) {
  const obj = {};

  for (let num of nums) {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  const buckets = new Array(nums.length);
  for (let num in obj) {
    const count = obj[num];
    if (!buckets[count]) {
      buckets[count] = [];
    }
    buckets[count].push(parseInt(num));
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
  }

  return result;
}
