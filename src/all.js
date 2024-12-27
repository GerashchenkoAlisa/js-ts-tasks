/**
 * Write a function that will work similar to standard Promise. all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */

module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError());
    }

    const results = []; // массив результатов
    let countPromises = 0; // Счетчик промисов.

    for (let i = 0; i < promisesArray.length; i++) {
      const promise = promisesArray[i];
      Promise.resolve(promise)
        .then(value => {
          results[i] = value;
          countPromises++;

          if (countPromises === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    }

    if (promisesArray.length === 0) {
      resolve([]);
    }
  });
};
