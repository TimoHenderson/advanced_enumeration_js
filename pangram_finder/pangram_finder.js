const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.map(letter => this.phrase.toLowerCase().includes(letter)).every(letterInPhrase => letterInPhrase === true);


}

module.exports = PangramFinder;
