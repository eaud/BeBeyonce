$(document).ready(function() {
	document.getElementById('startGame').addEventListener('click', function(){
		Game.start();
		Game.renderCards();
	});
	// Invoke your chain of functions and listeners within window.onload
});

//TIMER FUNCTION

//STOP TIMER FUNCTION (might just be part of the interval)


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
          /*link 5*/
          /*link 6*/
          /*link 7*/
          ];
          var theMichelleArray = [
            'http://25.media.tumblr.com/cb73fea5799a92755f74ce37a7b9fcdf/tumblr_mhobwf9KnT1qkdh9eo3_250.gif'
          ];

          var trackArray = [
            'flawless', 'halo', 'countdown', 'babyboy'
          ];

					var cardArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
//CardObjCreator Combines attributes from the above arrays to make the card objects that will track the game
          var CardObjCreator(bey, single) {
            this.bey = link;
            this.single = single;
          };


	//---------variables--------------------------------------------------------//
          var container = document.getElementById('game');
					var infoDiv = document.getElementById('info');

	return {

	 //---------functions-------------------------------------------------------//
				 start : function() {
					tilesArray = shuffle(tilesArray);
			 },

				 renderCards : function() {
					container.innerHTML = '';
					infoDiv.innerHTML = '';
					for (var i = 0; i < tilesArray.length; i++){
						var curTile = document.createElement('div');
						curTile.className = "column";
						curTile.setAttribute('data-value', tilesArray[i]);
						curTile.addEventListener('click', this.makePlay);
						container.appendChild(curTile);
					}
				},

				 makePlay : function(event) {
           //use jQuery to call the data-code of what was clicked, use that as key in the
					 event.currentTarget.classList.add("found");
					 event.currentTarget.classList.add("clicked");
					 event.currentTarget.innerHTML = event.currentTarget.getAttribute('data-value');
					 var tilesClicked = document.getElementsByClassName('clicked');
					 if(tilesClicked.length === 2){Game.checkForMatch()};
				},

				 checkForMatch : function() {
				 	 var tilesClicked = document.getElementsByClassName('clicked');
					 		if(tilesClicked[0].innerHTML === tilesClicked[1].innerHTML){
								for(var i = tilesClicked.length - 1; i >= 0; i --){
									tilesClicked[i].removeEventListener('click', this.makePlay);
									tilesClicked[i].classList.remove('clicked');
								}
								this.checkForWin();
							} else {
								window.setTimeout(function(){
									for(var i = tilesClicked.length - 1; i >= 0; i --){
										tilesClicked[i].innerHTML = '';
										tilesClicked[i].classList.remove('found');
										tilesClicked[i].classList.remove('clicked');
									}
								}, 1000);
							}
				},

				 checkForWin : function() {
					 var allFound = document.getElementsByClassName('found');
					 if(allFound.length === 10){
						 var youWin = document.createElement('div');
						 	youWin.innerHTML = 'You Win!'
						 	infoDiv.appendChild(youWin);
						 for(var i = allFound.length - 1; i >= 0; i --){
							 allFound[i].classList.add('won');
							 allFound[i].classList.remove('found');
						 }
					 }
				},
			}
})();

// Choreo is the interstitial reset Simon game;

var Choreo = (function(){

      return{


      }

})();
