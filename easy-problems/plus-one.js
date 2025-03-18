var plusOne = function(digits) {
    const num = BigInt(digits.join(''));
    const total = num + BigInt(1);
    const arr = total.toString().split('').map(Number);
    return arr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))