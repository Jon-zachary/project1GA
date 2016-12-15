class FieldBox {
  constructor(){
    this.sideLength = null;
    this.xCoord = null;
    this.yCoord = null;
    this.sideColored = null;
    this.color = null;
    this.setLength();
    this.setCoords();
    this.pickSide();
    this.pickColor();
    this.colorArray = [];
  }
    //convience function, coppied from MDN
  // rndRange(min, max) {
  // return Math.random() * (max - min) + min;
  // }

  setLength() {
    //I know 64-32 = 32 ;) I just like keeping it this way because it
    //shows the range params.
    this.sideLength = Math.floor(Math.random()*(64-32) + 32);
  }

  setCoords() {
    this.xCoord = Math.floor(Math.random()*(970-30) + 30);
    this.yCoord = Math.floor(Math.random()*(400-30) + 30);
  }

  pickSide(){

  }

  pickColor(){

  }

  drawBox(){
    let aBox = $('<div class=fieldBox></div>');


    $(aBox).css({'height':this.sideLength});
    $(aBox).css({'width':this.sideLength});

    $(aBox).css({'top':this.yCoord});
    $(aBox).css({'left':this.xCoord});

    $(aBox).appendTo('body');


  }

}

 let box1 = new FieldBox();
 let box2 = new FieldBox();
 let box3 = new FieldBox();
 let box4 = new FieldBox();


 box1.drawBox();
 box2.drawBox();
 box3.drawBox();
 box4.drawBox();


















