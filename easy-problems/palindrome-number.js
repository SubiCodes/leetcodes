var isPalindrome = function(x) {
    let originalString = x.toString();
    let reversedString = originalString.split('').reverse().join('');

    if (originalString.trim() === reversedString.trim()){
        console.log(`Origial: ${originalString}, Reversed: ${reversedString}`);
        return true;
    }
    else{
        console.log(`Origial: ${originalString}, Reversed: ${reversedString}`);
        return false;
    }
};

console.log(isPalindrome(-121));
