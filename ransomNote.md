## Problem

[Leetcode](https://leetcode.com/problems/ransom-note/description/)

## Solution

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let ch of magazine) {
    ransomNote = ransomNote.replace(ch, "");
  }

  return ransomNote.length === 0;
};
```
