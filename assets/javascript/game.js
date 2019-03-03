//Create variables
var wins = 0;
var losses = 0;
var imagePoints = [12, 4, 7, 3, 1, 5, 2, 8, 9, 10];
var currentScore = 0;



$( document ).ready( function () {
    var randomNumber = ( Math.floor( Math.random() * 120 ) + 18 );
    console.log( randomNumber );
    $( "#random-number" ).html( "<h1>Random Number: " + randomNumber + "</h1>" )
    randomNumber = parseInt( randomNumber );
} );





var imagePointsOne = ( Math.floor( Math.random() * 12 ) + 1 );
console.log( imagePointsOne );

var imagePointsTwo = ( Math.floor( Math.random() * 12 ) + 1 );
console.log( imagePointsTwo );
var imagePointsThree = ( Math.floor( Math.random() * 12 ) + 1 );
console.log( imagePointsThree );

var imagePointsFour = ( Math.floor( Math.random() * 12 ) + 1 );
console.log( imagePointsFour );







$( "#mo-salah1" ).on( "click", function () {
    imagePointsOne;
    currentScore += imagePointsOne;
    // alert( "You scored " + currentScore + " points!" );
    updateHTML();


} );
$( "#mo-salah2" ).on( "click", function () {
    imagePointsTwo;
    currentScore += imagePointsTwo;
    // alert( "You scored " + currentScore + " points!" );
    updateHTML();

} );
$( "#mo-salah3" ).on( "click", function () {
    imagePointsThree;
    currentScore += imagePointsThree;
    // alert( "You scored " + currentScore + " points!" );
    updateHTML();

} );
$( "#mo-salah4" ).on( "click", function () {
    imagePointsFour;
    currentScore += imagePointsFour;
    // alert( "You scored " + currentScore + " points!" );
    updateHTML();
} );





function updateHTML() {
    $( "#current-score" ).html( "<h1>Current Score: " + currentScore + "</h1>" )

    if ( currentScore === randomNumber ) {
        alert( "You win!" );
    }

    else if ( currentScore >= randomNumber ) {
        alert( "You lose!!" );
    }



};



function reset() {
    currentScore = 0;
    totalScore = 0;
    randomNumber;
}
