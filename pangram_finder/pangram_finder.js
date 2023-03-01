const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const lettersInPhrase = this.alphabet.map(letter => this.phrase.includes(letter));
  return lettersInPhrase.every(letterInPhrase => letterInPhrase === true);

}

module.exports = PangramFinder;
