var quart= 10;

function randomChance(quart){
    var winningNum = 50;
    while (quart > 0) {
        if(winningNum === Math.floor(Math.random()*100)+1){
          quart = quart + Math.floor(Math.random()*50)+51;
          quart = quart - 1;
          console.log(quart);
        } else {
          quart = quart - 1;
          if (quart == 0){
            console.log(quart);
          }
        }
    }
}
randomChance(quart);
