//Create variables
var wins = 0;
var losses = 0;

var currentScore = 0;




$( document ).ready( function () {
    var randomNumber = ( Math.floor( Math.random() * 120 ) + 18 );
    console.log( randomNumber );
    $( "#random-number" ).html( "<h1>Random Number: " + randomNumber + "</h1>" )









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
        console.log( currentScore );
        // alert( "You scored " + currentScore + " points!" );
        updateHTML();





    } );
    $( "#mo-salah2" ).on( "click", function () {
        imagePointsTwo;
        currentScore += imagePointsTwo;
        console.log( currentScore );
        // alert( "You scored " + currentScore + " points!" );
        updateHTML();


    } );
    $( "#mo-salah3" ).on( "click", function () {
        imagePointsThree;
        currentScore += imagePointsThree;
        console.log( currentScore );
        // alert( "You scored " + currentScore + " points!" );
        updateHTML();


    } );
    $( "#mo-salah4" ).on( "click", function () {
        imagePointsFour;
        currentScore += imagePointsFour;
        console.log( currentScore );
        // alert( "You scored " + currentScore + " points!" );
        updateHTML();

    } );





    function updateHTML() {
        if ( randomNumber === currentScore ) {

            // alert( "Golazo! You've won the game!" )
            wins++;
            reset();

            console.log( wins );
        } else if ( currentScore > randomNumber ) {
            // alert( "You Lost!" )
            losses++;
            reset();
        }
        $( "#current-score" ).html( "<h1>Current Score: " + currentScore + "</h1>" );
        $( "#wins-text" ).html( "<h1>Wins: " + wins + "</h1>" );
        $( "#losses-text" ).html( "<h1>Losses: " + losses + "</h1>" );
        $( "#random-number" ).html( "<h1>Random Number: " + randomNumber + "</h1>" );

    };



    function reset() {
        currentScore = 0;
        randomNumber = ( Math.floor( Math.random() * 120 ) + 18 );
        imagePointsFour = ( Math.floor( Math.random() * 12 ) + 1 );
        imagePointsThree = ( Math.floor( Math.random() * 12 ) + 1 );
        imagePointsTwo = ( Math.floor( Math.random() * 12 ) + 1 );
        imagePointsOne = ( Math.floor( Math.random() * 12 ) + 1 );
    }
} );
