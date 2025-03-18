var romanToInt = function(s) {
    let integer = 0;
    var data = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let  i = 0
    while (i < s.length){
        let initialStack = 0;
        if (i < s.length - 1 && data[s[i]] < data[s[i + 1]]){
                initialStack = data[s[i+1]] - data[s[i]]
                i+=2;
        }else {
            initialStack = data[s[i]];
            console.log("Now", i);
            i++;
            console.log("New", i);
        }
        integer += initialStack;
    }
    return integer
};

