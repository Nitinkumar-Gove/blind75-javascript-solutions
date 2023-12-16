## Problem

[Leetcode](https://leetcode.com/problems/longest-palindrome/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let longest = 0;
  let keys = {};

  for (let ch of s) {
    keys[ch] = (keys[ch] || 0) + 1;
    if (keys[ch] % 2 === 0) {
      longest += 2;
    }
  }

  return s.length > longest ? longest + 1 : longest;
};
```
