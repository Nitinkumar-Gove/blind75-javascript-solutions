## Problem

[Leetcode](https://leetcode.com/problems/missing-number/description/)

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // calculate expected sum
  let len = nums.length;
  let expectedSum = (len * (len + 1)) / 2;

  // calculate actual sum
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  // return difference
  return expectedSum - actualSum;
};
```
