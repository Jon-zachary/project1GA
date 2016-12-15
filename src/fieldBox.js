class FieldBox {
  constructor(){
    this.length = null;
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
    this.length = Math.floor(Math.random()*(64-32) + 32);
  }

  setCoords() {
    this.xCoord = Math.floor(Math.random()*(970-30) + 30);
    this.yCoord = Math.floor(Math.random()*(570-30) + 30);
  }

  pickSide(){

  }

  pickColor(){

  }

}
