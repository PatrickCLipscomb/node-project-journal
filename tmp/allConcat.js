var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var simpleJournal = new Journal(title, body);
    var count = simpleJournal.wordCounter();
    var vowelCount = simpleJournal.vowelCounter();
    var consonantCount = simpleJournal.consonantCounter();
    var teaser = simpleJournal.getTeaser();
    $('#solution').text('There are ' + count + ' words in the body');
    $('#vowels').text('There are ' + vowelCount + ' vowels in the body');
    $('#consonants').text('There are ' + consonantCount + ' consonants in the body');
    $('#tease').text('Teaser: ' + teaser);
    });
  });
