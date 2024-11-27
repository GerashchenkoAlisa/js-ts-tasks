/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxlen = 0;
  let maxstr = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let len = 0;
      while (i + len < str1.length && j + len < str2.length && str1[i + len] === str2[j + len]) {
        len += 1;
      }
      if (len > maxlen) {
        maxlen = len;
        maxstr = str1.slice(i, i + len);
      }
    }
  }
  return maxstr;
};
