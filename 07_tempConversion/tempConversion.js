const ftoc = function(num) {
  validateInput(num);
  return Math.round((num-32)*(5/9) * 10) /10;
};

const ctof = function(num ) {
  return  Math.round((num * (9/5) +32) * 10)/10;
};

function validateInput(num) {
  if(typeof num === 'string' || isNaN(num)) {
    return 'ERROR';
  }
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
