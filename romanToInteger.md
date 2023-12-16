## Problem

[Leetcode](https://leetcode.com/problems/roman-to-integer/description/)

## Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = symbols[s[i]];
    const next = symbols[s[i + 1]];

    if (curr < next) {
      integer += next - curr;
      i++;
    } else {
      integer += curr;
    }
  }

  return integer;
};
```
