function DeckConstructor(){
  var suits = ['Heart', 'Spade', 'Clubs', 'Diamonds'];
  var values =['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var deck;

  this.show = function(){
    console.log(deck);
    console.log('length', deck.length);
  }

  var generateDeck = function(){
    deck = [];
    for(var i=0; i<suits.length; i++){
      for(var j=0; j<values.length; j++){
        // var card = {
        //   suit: suits[i];
        //   value: values[i];
        // };   OR
        // card.suit = suits[i];
        // card.value = values[j];

        var card = new Card(suits[i], values[j]);
        deck.push(card);
      }
    }
  }
  generateDeck();

  this.shuffle = function(){
    var numofShuffles = Math.floor((Math.random()*100)+50);
    for(var i=0; i<= numofShuffles; i++){
      var randomInteger1= Math.floor(Math.random()* deck.length);
      var randomInteger2 = Math.floor(Math.random()*deck.length);
      var temp = deck[randomInteger1];
      deck[randomInteger1]= deck[randomInteger2];
      deck[randomInteger2]= temp;
    }
    return this;
  }
  this.reset = generateDeck;
  this.getDeck = function(){
    return deck;
  }
}

DeckConstructor.prototype.deal = function(){
  return this.getDeck().pop();
}

function Card(suit, value){
  this.suit = suit;
  this.value = value;
}

var myDeck = new DeckConstructor();
// myDeck.shuffle().show()
// myDeck.shuffle().reset();
// myDeck.show();
console.log(myDeck.deal());
myDeck.show();
