var longestCommonPrefix = function(strs) {

    strs.sort();

    let results = "";
    let firstWord = strs[0];
    let lastWord = strs[strs.length - 1];

    let i = 0;
    while (i < firstWord.length && firstWord[i] === lastWord[i]){
        i++;
    }

    return firstWord.substring(0, i);
};

console.log(longestCommonPrefix(["flaor","flight","flawwwwwww"]));
