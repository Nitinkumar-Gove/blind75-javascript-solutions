## Problem

[Leetcode](https://leetcode.com/problems/valid-anagram/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let chMap = {};

  for (let i = 0; i < s.length; i++) {
    chMap[s[i]] = chMap[s[i]] ? chMap[s[i]] + 1 : 1;
    chMap[t[i]] = chMap[t[i]] ? chMap[t[i]] - 1 : -1;
  }

  for (let j = 0; j < s.length; j++) {
    if (chMap[[s[j]]] !== 0) return false;
  }

  return true;
};
```
