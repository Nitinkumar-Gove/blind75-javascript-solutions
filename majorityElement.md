## Problem

[Leetcode](https://leetcode.com/problems/majority-element/description/)

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1;
    if (counts[nums[i]] > nums.length / 2) return nums[i];
  }
};
```
