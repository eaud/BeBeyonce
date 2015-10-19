$(document).ready(
	$('#startGame').click(function(){
		CardGame.createCards();
		CardGame.renderCards();
    $('#startGame').hide();
    startTimer();
  })
);

<<<<<<< HEAD
//TIMER FUNCTION
=======
// GLOBAL SCORE VARIABLES

var playerScore = 0;
var playerScoresArray = [];
var scoreObjectArray = [];

//TIMER FUNCTIONS
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
var startTimer = function(){
  var count = function(){
    var currentSec = $('#secs');
    var currentMin = $('#mins');
    if(+currentSec.html() < 9){
      currentSec.html("0"+ (+currentSec.html() + 1))
    } else {
    currentSec.html(+currentSec.html() + 1)};
    if(currentSec.html() === '60'){
      currentSec.html('00');
      if(+currentMin.html() < 9){
        currentMin.html("0"+ (+currentMin.html() + 1))
      } else {
      currentMin.html(+currentMin.html() + 1)};
    }
<<<<<<< HEAD
=======
    playerScore++;
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
  };
  timerHandle = setInterval(count, 1000);
};

var stopTimer = function(){
  clearInterval(timerHandle);
};

var resetTimer = function(){
  stopTimer();
  $('#mins').html('00');
  $('#secs').html('00');
<<<<<<< HEAD
};

//STOP TIMER FUNCTION (might just be part of the interval)
var timerStop = function(){

}

// USE THIS TO SHUFFLE YOUR ARRAYS
=======
  playerScore = 0;
};

// SHUFFLES ARRAYS:
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};

var CardGame = (function(){
	//----------arrays----------------------------------------------------------//
  // The cardArray needs to be an array of card objects
  // Each card object needs to contain: name, source, show state
  //
          var beyArray = [
          /*link 1*/ 'http://pre09.deviantart.net/acf7/th/pre/i/2014/117/6/8/beyonce_png_by_sanlaka-d7g78x8.png',
          /*link 2*/ 'http://pre14.deviantart.net/9492/th/pre/i/2013/082/d/e/beyonce_png_by_avriljessie-d5z06o1.png',
          /*link 3*/ 'http://img09.deviantart.net/bf3c/i/2014/272/8/8/png___beyonce_by_andie_mikaelson-d80yii4.png',
          /*link 4*/ 'http://orig01.deviantart.net/87f3/f/2015/043/b/2/beyonce_grammys_png_by_maarcopngs-d8hq2xe.png',
          /*link 5*/ 'http://static.tumblr.com/8a417df0880b267cced339bda5b9d23a/laskoep/JPAng6yqt/tumblr_static_cqt87nn6q1kcsww0scggo0wgk.png',
          /*link 6*/ 'http://static.tumblr.com/c5731f27348ab91fc3f11c4c47606142/rsxknpy/3opnps41o/tumblr_static_8piij1fruc08g8oc44so4ogck.png',
          /*link 7*/ 'https://41.media.tumblr.com/61c51e35008b599beeb16cc1231790bb/tumblr_mincps63y41s5jjtzo1_500.png'
          ];
          var theMichelleArray = [
            'http://25.media.tumblr.com/cb73fea5799a92755f74ce37a7b9fcdf/tumblr_mhobwf9KnT1qkdh9eo3_250.gif'
          ];

          var singleArray = [
            'flawless', 'halo', 'countdown', 'babyboy', 'blow', 'noangel', 'rocket'
          ];

  //----------Constructor Function--------------------------------------------//

//CardObjCreator Combines attributes from the above arrays to make
//the card objects that will track the game
          function CardObjCreator(bey, single) {
            this.bey = bey;
            this.single = single;
          };
<<<<<<< HEAD

=======
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
	//---------variables--------------------------------------------------------//
          var container = $('#game');
					var infoDiv = $('#info');
          var beyObjArray;
          var player = 1;
<<<<<<< HEAD
	return {

=======
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
	 //---------functions-------------------------------------------------------//

//creatCards() uses the CardObjCreator to make an array of card objects that
//contain a designated photo and "single" that will be used to track the cards
// during play; we push each beyonce object twice to create a pair (this might fuck me up later);
// it closes by randomizing the array of objects so that when
// they are rendered as front-end elements, we can just loop through the array
<<<<<<< HEAD
=======
    return {
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
         createCards : function(){
           beyObjArray = [];
           var shufdBeyArray = shuffle(beyArray);

           for(var i = 0; i < shufdBeyArray.length - 3; i++){
             var thisBey = new CardObjCreator(shufdBeyArray[i], singleArray[i]);
             beyObjArray.push(thisBey);
             beyObjArray.push(thisBey);
           }
           var michelleObj = new CardObjCreator(theMichelleArray[0], 'reset');
           beyObjArray.push(michelleObj);
           beyObjArray = shuffle(beyObjArray);
         },

				 renderCards : function() {
<<<<<<< HEAD
           console.log(beyObjArray);
=======
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
           container.html('');
           var theStage = $('<div>');
           theStage.addClass('stage');
           for (var i = 0; i < beyObjArray.length; i++){
             if(i % 3 === 0){
               var row = $('<div>');
               row.addClass('row');
               theStage.append(row);
             }
             var currentBey = $('<div>');
             currentBey.addClass('column');
             currentBey.attr('id', beyObjArray[i].single);
             currentBey.click(CardGame.makePlay);
             currentBey.appendTo(row);
           }
           theStage.appendTo(container);
				},

				 makePlay : function(event) {
           //use jQuery to call the data-code of what was clicked, use that as key in the
					 event.currentTarget.classList.add("found");
					 event.currentTarget.classList.add("clicked");
           var beyCurrentHit = event.currentTarget.id;
           var beyToDisplay;
           for (i = 0; i < beyObjArray.length; i++){
             if (beyCurrentHit === beyObjArray[i].single){
               beyToDisplay = beyObjArray[i].bey;
             }
           }
					 event.currentTarget.innerHTML = '<img src="' + beyToDisplay +'" />';
           window.setTimeout(function(){
             if(beyCurrentHit === 'reset'){
<<<<<<< HEAD
             alert('uh oh, Michelle through the trap door! You better teach her the choreo or this is game OVER!');
             $('.stage').hide();
             //HERE WE WOULD CALL THE CHOREO MODULE STARTER;
           }}, 1350);
=======
             alert('uh oh, Michelle through the trap door! Take it again from the top');
             $('.stage').remove();
             //HERE WE WOULD CALL THE CHOREO MODULE STARTER;
             CardGame.createCards();
             CardGame.renderCards();
           }}, 1400);
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8

					 var cardsClicked = $('.clicked');
					 if(cardsClicked.length === 2){CardGame.checkForMatch()};
				},

				 checkForMatch : function() {
				 	 var cardsClicked = $('.clicked');
					 		if(cardsClicked[0].id === cardsClicked[1].id){
								for(var i = cardsClicked.length - 1; i >= 0; i --){
									cardsClicked.eq(i).off('click', CardGame.makePlay);
									cardsClicked.eq(i).removeClass('clicked');
								}
								CardGame.checkForWin();
							} else {
								window.setTimeout(function(){
									for(var i = cardsClicked.length - 1; i >= 0; i --){
										cardsClicked.eq(i).html('');
										cardsClicked.eq(i).removeClass('found');
										cardsClicked.eq(i).removeClass('clicked');
									}
<<<<<<< HEAD
								}, 1000);
=======
								}, 500);
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
							}
				},

				 checkForWin : function() {
					 var allFound = $('.found');
					 if(allFound.length === 8){
						 var youWin = $('<div>');
<<<<<<< HEAD
						 	youWin.html('Standing Ovation!').appendTo($('.stage'));
=======
             youWin.addClass('winMessage');
						 	youWin.html('YAAAS<br>KWEEN!').appendTo($('.stage'));
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
						 for(var i = allFound.length - 1; i >= 0; i --){
							 allFound[i].classList.add('won');
							 allFound[i].classList.remove('found');
						 }
             stopTimer();
             $('#reset').text('GOODBYE MICHELLE');
             window.setTimeout(function(){
               $('.stage').remove();
               CardGame.updateScoreboard();
               if(player < 3){
                 player ++;
<<<<<<< HEAD
               } else {
                 resetTimer();
                 alert('Congrats, Player ' + player + '! Now we\'ll see who run the world\(girls\)');
                 // CALL THE FUNCTION TO DEFINE WINNER AND DISPLAY IN WINNER MODULE
               }
               resetTimer();
               alert('Congrats, Player ' + (player - 1) + '! \n Now it\'s your turn, Player ' + player + '!');
               $('#startGame').show();
=======
                 alert('Congrats, Player ' + (player - 1) + '! \n Now it\'s your turn, Player ' + player + '!');
                 resetTimer();
                 $('#startGame').show();
               } else {
                 resetTimer();
                 alert('Congrats, Player ' + player + '! Now we\'ll see who run the world \(girls\)');
                 $('.stage').hide();
                 CardGame.whoIsBeyonce();
                 CardGame.renderBestinysChild();
               }
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
             }, 3000);
					 }
				},

        updateScoreboard : function(){
            var scoreLineMin = $('#p' + player + 'm');
            var scoreLineSec = $('#p' + player + 's');
            var playerScoredMin = $('#mins').text();
            var playerScoredSecs = $('#secs').text();
            scoreLineMin.text(playerScoredMin);
            scoreLineSec.text(playerScoredSecs);
<<<<<<< HEAD
=======
            playerScoresArray.push(playerScore);
        },

        whoIsBeyonce : function(){
            function ScoreObject(playerName, score) {
              this.playerName = playerName;
              this.score = score;
            };
            var playerNameArray = ['Player 1', 'Player 2', 'Player 3'];
            for(i = 0; i < playerScoresArray.length; i++){
              var oneScore = new ScoreObject(playerNameArray[i], playerScoresArray[i]);
              scoreObjectArray.push(oneScore);
            }
            scoreObjectArray.sort(function(a, b) {
                return parseFloat(a.score) - parseFloat(b.score);
              });
        },

        renderBestinysChild : function(){
          var bestinysChild = $('<div>');
          bestinysChild.addClass('bestiny');
          var beyonce = $('<div>');
          beyonce.attr('id', 'beyonce');
          beyonce.text('Congratulations, ' + scoreObjectArray[0].playerName + '! You are \n Beyoncé.');
          beyonce.appendTo(bestinysChild);
          var kelly = $('<div>');
          kelly.attr('id', 'kelly');
          kelly.text('Ok, ' + scoreObjectArray[1].playerName + ', at least you\'re not Michelle?');
          kelly.appendTo(bestinysChild);
          var michelle = $('<div>');
          michelle.attr('id', 'michelle');
          michelle.text('Listen, ' + scoreObjectArray[2].playerName + '. It\'s not good news, but it could be worse news! You\'re Michelle, but at least you\'re somebody. Remember that.');
          michelle.appendTo(bestinysChild);
          bestinysChild.appendTo($('#game'));
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
        }
			}
})();

<<<<<<< HEAD
// Choreo is the interstitial reset Simon game;

var Choreo = (function(){

      return{
          // randomly generate an 8 step sequence of 4 buttons
          //
          // display first step, wait for click

      }

})();
=======
// in Be Beyonce 2.0, clicking Michelle will result in an interstitial challente - Choreo, a Simon-like game in which you have to help michelle nail the choreography;
// var Choreo = (function(){
//       return{
//           // randomly generate an 8 step sequence of 4 buttons
//           //
//           // display first step, wait for click
//       }
// })();
>>>>>>> 4d91ab6aa6c2e70a0e29eed5d1c807ffc3c672b8
