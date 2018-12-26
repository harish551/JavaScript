'use strict'
function fromRoman2Decimal(str) {  

  if(str.match(pattern)) {
    var decimal = 0;
    let roman = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  
    for (let key in roman) {

      while (str.indexOf(key) === 0) {
        decimal += roman[key];
        str = str.replace(key,'');

      }
    }

    return (true+'\n'+decimal);
  }

  return false;
}

let pattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
let readline = require('readline-sync');
let input = readline.question("Enter Roman numral : ");
console.log(fromRoman2Decimal(input));

