/**
 * @param {String} string
 *
 * @returns {boolean}
 */
 function isApolindrom(string) {
  let string2 = string.replace(/\s+/g, ''); 
  let viceVersa = '';

  for (let i = string2.length - 1; i >= 0; i--) {
    viceVersa += string2[i]; 
  } 
  if ((viceVersa === string2) && string2 !== '') {
    return true;
  } 
  
  return false;
}
