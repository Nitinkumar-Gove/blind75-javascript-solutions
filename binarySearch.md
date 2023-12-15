## Problem

[Leetcode](https://leetcode.com/problems/binary-search/submissions/)

## Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2);

    if (target < nums[mid]) {
      // if target is smaller than no at mid, then we need to search in first half
      high = mid - 1;
    } else {
      // search in second half of array
      low = mid;
    }
  }

  return nums[low] === target ? low : -1;
};
```
