/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
// eslint-disable-next-line no-unused-vars
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function Number(num) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // eslint-disable-next-line func-names
  return function (start, end) {
    const number = [];

    for (let i = start; i <= end; i++) {
      if (Number(i)) {
        number.push(i);
      }
    }
    return number;
  };
};
