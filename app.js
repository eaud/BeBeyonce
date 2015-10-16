$(document).ready(
	$('#startGame').click(function(){
		CardGame.createCards();
		CardGame.renderCards();
    $('#startGame').hide();
    startTimer();
  })
);

//TIMER FUNCTION
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
};

//STOP TIMER FUNCTION (might just be part of the interval)
var timerStop = function(){

}

// USE THIS TO SHUFFLE YOUR ARRAYS
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

	//---------variables--------------------------------------------------------//
          var container = $('#game');
					var infoDiv = $('#info');
          var beyObjArray;
          var player = 1;
	return {

	 //---------functions-------------------------------------------------------//

//creatCards() uses the CardObjCreator to make an array of card objects that
//contain a designated photo and "single" that will be used to track the cards
// during play; we push each beyonce object twice to create a pair (this might fuck me up later);
// it closes by randomizing the array of objects so that when
// they are rendered as front-end elements, we can just loop through the array
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
           console.log(beyObjArray);
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
             alert('uh oh, Michelle through the trap door! You better teach her the choreo or this is game OVER!');
             $('.stage').hide();
             //HERE WE WOULD CALL THE CHOREO MODULE STARTER;
           }}, 1350);

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
								}, 1000);
							}
				},

				 checkForWin : function() {
					 var allFound = $('.found');
					 if(allFound.length === 8){
						 var youWin = $('<div>');
						 	youWin.html('Standing Ovation!').appendTo($('.stage'));
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
               } else {
                 resetTimer();
                 alert('Congrats, Player ' + player + '! Now we\'ll see who run the world\(girls\)');
                 // CALL THE FUNCTION TO DEFINE WINNER AND DISPLAY IN WINNER MODULE
               }
               resetTimer();
               alert('Congrats, Player ' + (player - 1) + '! \n Now it\'s your turn, Player ' + player + '!');
               $('#startGame').show();
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
        }
			}
})();

// Choreo is the interstitial reset Simon game;

var Choreo = (function(){

      return{
          // randomly generate an 8 step sequence of 4 buttons
          //
          // display first step, wait for click

      }

})();
