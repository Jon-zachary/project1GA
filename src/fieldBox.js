class FieldBox {
  constructor(sideColor,side){
    this.sideLength = null;
    this.xCoord = null;
    this.yCoord = null;
    this.side = side;
    this.sideColor = sideColor;
    this.setLength();
    this.setCoords();

  }
  setLength() {
    //I know 64-32 = 32 ;) I just like keeping it this way because it
    //shows the range params.
    this.sideLength = Math.floor(Math.random()*(64-32) + 32);
  }

  setCoords() {
    this.xCoord = Math.floor(Math.random()*(970-30) + 30);
    this.yCoord = Math.floor(Math.random()*(400-30) + 30);
  }


  drawBox(){
    let aBox = $('<div class=fieldBox></div>');

    //dsimension
    $(aBox).css({'height':this.sideLength});
    $(aBox).css({'width':this.sideLength});

    //position
    $(aBox).css({'top':this.yCoord});
    $(aBox).css({'left':this.xCoord});
    //color
    const side1 = {'border-left':`5px solid ${this.sideColor}`}
    const side2 = {'border-right':`5px solid ${this.sideColor}`}
    const side3 = {'border-top':`5px solid ${this.sideColor}`}
    const side4 = {'border-bottom':`5px solid ${this.sideColor}`}
    const sideArray = [side1,side2,side3,side4];
    const rndSide = Math.floor(Math.random()*4);
    console.log(rndSide);
    const side  = sideArray[rndSide];
    $(aBox).css(side);

    $(aBox).appendTo('body');

  }

}


