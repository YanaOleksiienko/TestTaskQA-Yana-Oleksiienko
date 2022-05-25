/**
 * @param {number[]} arr
 *
 * @returns {number} numberOfValues
 */
function getNumberOfValues(arr) {
  let numberOfValues = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 4 === 0 || arr[i] % 6 === 0) && arr[i] !== 0) {
      numberOfValues++;
    }
  }

  return numberOfValues;
}