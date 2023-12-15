## Problem

[Leetcode](https://leetcode.com/problems/valid-parentheses/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  // declare a stack
  const cStack = [];

  for (let i = 0; i < s.length; i++) {
    const cChar = s.charAt(i);

    switch (cChar) {
      case "(":
        cStack.push(")");
        break;
      case "{":
        cStack.push("}");
        break;
      case "[":
        cStack.push("]");
        break;
      default:
        // we have reached the begining of closing brackets.
        if (cChar !== cStack.pop()) {
          return false;
        }
        break;
    }
  }

  return cStack.length === 0;
};
```
