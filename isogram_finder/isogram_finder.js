const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    lowerCase = this.word.toLowerCase().split("");
    return lowerCase.every((letter) => lowerCase.filter(char => char === letter).length === 1);
}

module.exports = IsogramFinder;
