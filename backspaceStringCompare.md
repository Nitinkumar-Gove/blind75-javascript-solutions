## Problem

[Leetcode](https://leetcode.com/problems/backspace-string-compare/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return process(s) === process(t);
};

/**
 * function to process # (backspace) in string
 */
const process = function (s) {
  let stack = [];
  for (let ch of s) {
    if (ch === "#") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
};
```
