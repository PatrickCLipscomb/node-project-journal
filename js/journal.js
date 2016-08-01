function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCounter = function() {
  var count = 0;
  var arry = [];
  arry = this.body.split(' ');
  count = arry.length;
  return count;
};

Journal.prototype.vowelCounter = function() {
  var vowelCount = 0;
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var letters = [];
  letters = this.body.split('');
  letters.forEach(function(letter) {
    if (vowelArray.includes(letter)) {
      vowelCount += 1;
    }
  });
  return vowelCount;
};

Journal.prototype.consonantCounter = function() {
  var consonantCount = 0;
  var vowelArray = ['a', 'e', 'i', 'o', 'u', ' '];
  var consonants = [];
  consonants = this.body.split('');
  consonants.forEach(function(consonant) {
    if (!(vowelArray.includes(consonant))) {
      consonantCount += 1;
    }
  });
  return consonantCount;
};

Journal.prototype.getTeaser = function() {
  var teaser = '';
  var teaserArry = [];
  var count = 0;
  words = this.body.split(' ');
  for (var i = 0; i < 9; i++) {
    teaserArry.push(words[i]);
  }
  teaser = teaserArry.join(' ');
  return teaser;
};

exports.journalModule = Journal;
