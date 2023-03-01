const AnagramFinder = function (word) {
    this.word = word;

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const sortedWord = sortWord(this.word);
    return otherWords.filter((word) => word !== this.word && sortWord(word) === sortedWord);
}

const sortWord = function (word) {
    return word.toLowerCase().split("").sort().join("");
}

module.exports = AnagramFinder;
