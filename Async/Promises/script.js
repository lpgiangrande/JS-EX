/**
 * Calcule le carré d'un nombre si input valide, renvoie réponse ok au bout d'une seconde.
 * 
 * @param {number} num - The number to be squared.
 * @returns {Promise<number>} A Promise that resolves to the square of the given number.
 * @throws {Error} If the argument is not a number.
 * 
 */
function squareNumber(num) {
    return new Promise((resolve, reject) => {
      if (typeof num !== 'number') {
        reject('Invalid argument');
      } else {
        setTimeout(() => {
          resolve(num * num);
        }, 1000);
      }
    });
  }
  
  // Usage:
  squareNumber(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  // Output after 1 second: 25
  
  squareNumber('abc')
    .then(result => console.log(result))
    .catch(error => console.error(error));
  // Output: Invalid argument