## Problem

[Leetcode](https://leetcode.com/problems/contains-duplicate/description/)

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let elements = new Map();

  elements.set(nums[0], 0);

  for (let i = 1; i < nums.length; i++) {
    if (elements.has(nums[i])) {
      return true;
    } else {
      elements.set(nums[i], 0);
    }
  }

  return false;
};
```
