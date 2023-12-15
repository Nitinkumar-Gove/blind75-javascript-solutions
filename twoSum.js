/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  const nMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (nMap.has(diff)) {
      return [i, nMap.get(diff)];
    } else {
      nMap.set(nums[i], i);
    }
  }
};
