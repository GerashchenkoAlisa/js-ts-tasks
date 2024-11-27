/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  throw new Error('Not implemented'); // remove me and write a solution
};
module.exports.removeItems = function removeItems(arr, value) {
  let result = [];

  for (let a of arr) {
    if (typeof a === 'object' && a !== null && typeof value === 'object' && value !== null) {
      if (JSON.stringify(a) !== JSON.stringify(value)) {
        result.push(a);
      }
    } else {
      if (a !== value) {
        result.push(a);
      }
    }
  }
  return result;
};
