console.log('app.js online');

console.log($())

 $(function movement() {
  //!!!!!!!!!!The following code is taken almost verbatim from patrick!!!!!!!!
        //I tried to use css transforms for all the movement functions
        //but they got in each others way, for the rotate, transform is
        //the easiest way to do it and it doesn't seem to interact with
        //the other movements.
        let angle = 0;
        $(window).on('keydown', function(e) {
          //down
          if(e.which === 40) {
            if(e.shiftKey){
                $('.square').animate({'top':'+=5'},25)
              }else{
            $('.square').animate({'top':'+=20'},25)
              }
          }
          //up
          if(e.which === 38) {
              if(e.shiftKey){
                $('.square').animate({'top':'-=5'},25)
              }else{
            $('.square').animate({'top':'-=20'},25)
           }
          }
          //right
          if(e.which === 39) {
            if(e.shiftKey){
                $('.square').animate({'left':'+=5'},25)
              }else{
            $('.square').animate({'left':'+=20'},25)
          }
        }
          //left
          if(e.which === 37) {
            if(e.shiftKey){
                $('.square').animate({'left':'-=5'},25)
              }else{
            $('.square').animate({'left':'-=20'},25)
          }
        }
          //rotate
          if(e.which === 32){
             angle  = (angle + 90) % 360;
            $('.square').css({'transform': 'rotate(' + angle + 'deg)'});
          }
        })

    });


 const box1 = new FieldBox('#07C3F7');
 const box2 = new FieldBox('lightpink');
 const box3 = new FieldBox('springgreen');
 const box4 = new FieldBox('gold');


 box1.drawBox();
 box2.drawBox();
 box3.drawBox();
 box4.drawBox();


$(function playerPosition(){
  $(window).on('keydown',function() {
    console.log('player',$('.square').css('top'),$('.square').css('left'));
    console.log('box',box1.yCoord,box1.xCoord,box1.sideLength);

  })
})

function collision(aBox = box1){
  $(window).on('keydown',function() {
    let ptop = parseInt($('.square').css('top'));
    let pleft = parseInt($('.square').css('left'));
    let btop = aBox.yCoord;
    let bleft = aBox.xCoord;
    let plength = 30;
    let blength = aBox.sideLength;
      if((ptop <= btop + blength +10) && (ptop >= btop - plength - 10) && (pleft+plength > bleft -10) && (pleft<bleft+blength+5) ){
        console.log('collision');
        }
  })
}

$(function testCollisions(){
  $(window).on('keydown',function(){
  if(collision(box1)){console.log('box1 collision');}
  // if(collision(box2)){console.log('box2 collision');}
  // if(collision(box3)){console.log('box3 collision');}
  // if(collision(box4)){console.log('box4 collision');}
    })
})






