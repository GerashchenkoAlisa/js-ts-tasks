/**
 * Write a function that will work similar to standard Promise. race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */

exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    for (let promise of promisesArray) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};