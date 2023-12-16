## Problem

[Leetcode](https://leetcode.com/problems/climbing-stairs/description/)

## Solution

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
};
```
