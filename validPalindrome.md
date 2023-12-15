## Problem

[Leetcode](https://leetcode.com/problems/valid-palindrome/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }

  return true;
};
```
