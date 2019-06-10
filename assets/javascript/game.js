//Characters to choose from.
var words = ['mcqueen', 'mater', 'sally', 'guido', 'luigi', 'fillmore', 'sarge', 'ramone', 'flo', 'doc']

//Variables to store values
var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Variable counts
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Start Game
function Game() {
    //Computer chooses random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    //Put work into separate array
    lettersOfWord = randomWord.split('');

    //Store lenght of word in blanks
    blanks = lettersOfWord.length;

    //creating loop to generate "_" for each letter
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push('_');
    }
    
    //Show "_" under Current Word in index.html
    document.getElementById("current-word").innerHTML = '  ' + blanksAndCorrect.join('  ');
};

//Audio and Image
var mcqueen = document.getElementById('Float');
var mater = document.getElementById('Moon');
var sally = document.getElementById('sally');
var guido = document.getElementById('guido');
var luigi = document.getElementById('luigi');
var fillmore = document.getElementById('fillmore');
var sarge = document.getElementById('sarge');
var ramone = document.getElementById('ramone');
var flo = document.getElementById('flo');
var doc = document.getElementById('doc');

function aud() {
    //mcqueen audio and image
    if (randomWord === words[0]) {
        doc.pause();
        flo.pause();
        ramone.pause();
        sarge.pause();
        fillmore.pause();
        luigi.pause();
        guido.pause();
        sally.pause();
        mater.pause();
        mcqueen.play();
        document.getElementById("image").src="./assets/images/lightning.jpg";
    }

    //mater audio and image
    if (randomWord === words[1]) {
        mcqueen.pause();
        doc.pause();
        flo.pause();
        ramone.pause();
        sarge.pause();
        fillmore.pause();
        luigi.pause();
        guido.pause();
        sally.pause();
        mater.play();
        document.getElementById("image").src="./assets/images/mater.jpg";
    }

    //sally audio and image
    if (randomWord === words[1]) {
        mater.pause();
        mcqueen.pause();
        doc.pause();
        flo.pause();
        ramone.pause();
        sarge.pause();
        fillmore.pause();
        luigi.pause();
        guido.pause();
        sally.play();
        document.getElementById("image").src="./assets/images/sally.jpg";
    }
};

//Reset function
function reset() {
    guessesLeft = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game();
};

//Check letters for match
function checkLetter(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    } 

    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesLeft--;
    }
};

//Check to see if player win
function complete() {
    console.log('Wins: ' + wins + '| Losses:' + losses + '| Number of Guesses Remaining' + guessesLeft);

    //if win. Alert with audio and image.
    if (lettersOfWord.toString() === blanksAndCorrect.toString()) {
        wins++;
        aud();
        reset();
        document.getElementById("wins").innerHTML = '  ' + wins;
    } else if (guessesLeft === 0) {
        losses++;
        reset();
        document.getElementById('losses').innerHTML = '  ' + losses;
    }
    document.getElementById('currentword').innerHTML = '  ' + blanksAndCorrect.join(' ');
    document.getElementById('guesses-left').innerHTML = '  ' + guessesLeft;
};

//Start game function
Game()

document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("guessed").innerHTML = '  ' + wrongGuess.join(' ');
};