## Problem

[Leetcode](https://leetcode.com/problems/single-number/description/)

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = (numMap[nums[i]] || 0) + 1;
  }

  for (let j = 0; j < nums.length; j++) {
    if (numMap[nums[j]] === 1) return nums[j];
  }
};
```
