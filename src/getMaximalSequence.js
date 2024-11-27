/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxx = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      result.push(arr[i]);
    } else {
      if (result.length > maxx.length) {
        maxx = result;
      }
      result = [arr[i]];
    }
  }
  if (result.length > maxx.length) {
    maxx = result;
  }
  return maxx;
};
