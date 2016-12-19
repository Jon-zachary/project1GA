class PlayerBox {
  constructor(){
  this.sideLength = 30;
  this.angle = 0;
  this.win=null;
  this.boxCount = 0;
  }
  drawPlayer(){
    let aBox = $('<div class=playerBox></div>');
    // aBox.css({'width':this.sideLength})
    // aBox.css({'height':this.sideLength})
    aBox.appendTo('.wrapper');

     }

  }


