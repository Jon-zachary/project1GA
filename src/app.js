
let box1 = new FieldBox('#07C3F7');
let player = new PlayerBox();
$(box1).attr('id','box1');

 $(function movement() {
  // !!!!!!!!!!The following code is taken almost verbatim from patrick!!!!!!!!
  //       I tried to use css transforms for all the movement functions
  //       but they got in each others way, for the rotate, transform is
  //       the easiest way to do it and it doesn't seem to interact with
  //       the other movements.
        let angle = 0;
        $('body').on('keydown', function(e) {
          //down
          if(e.which === 40) {
            if(e.shiftKey){
                $('.playerBox').animate({'top':'+=5'},25)
              }else{
            $('.playerBox').animate({'top':'+=20'},25)
              }
          }
          //up
          if(e.which === 38) {
              if(e.shiftKey){
                $('.playerBox').animate({'top':'-=5'},25)
              }else{
            $('.playerBox').animate({'top':'-=20'},25)
           }
          }
          //right
          if(e.which === 39) {
            if(e.shiftKey){
                $('.playerBox').animate({'left':'+=5'},25)
              }else{
            $('.playerBox').animate({'left':'+=20'},25)
          }
        }
          //left
          if(e.which === 37) {
            if(e.shiftKey){
                $('.playerBox').animate({'left':'-=5'},25)
              }else{
            $('.playerBox').animate({'left':'-=20'},25)
          }
        }
          //rotate
          if(e.which === 32){
             angle  = (angle + 90) % 360;
             player.angle = angle;
            $('.playerBox').css({'transform': 'rotate(' + angle + 'deg)'});

          }
        })

    });

function onWin(){
  console.log('you win!')
}

 // const box2 = new FieldBox('lightpink');
 // const box3 = new FieldBox('springgreen');
 // const box4 = new FieldBox('gold');



 player.drawPlayer();
 box1.drawBox();
 let side1 = Object.keys(box1.side)[0]
 // box2.drawBox();
 // box3.drawBox();
 // box4.drawBox();

//  function testCollisions(){
//   const box1side = Object.keys(box1.side)[0];
//   const box2side = Object.keys(box2.side)[0];
//   const box3side = Object.keys(box3.side)[0];
//   const box4side = Object.keys(box4.side)[0];
// }


function collision(aBox = box1){
  $('body').on('keyup',function() {
    const ptop = parseInt($('.playerBox').css('top'));
    const pleft = parseInt($('.playerBox').css('left'));
    const btop = parseInt(aBox.yCoord);
    const bleft = parseInt(aBox.xCoord);
    const plength = 30;
    const blength = aBox.sideLength;

    if((ptop <= btop + blength +10) && (ptop >= btop - plength - 10) && (pleft+plength >= bleft -10) && (pleft <= bleft+blength+5) ){


       // top collision
        if(ptop+plength<btop){
          if(side1 === 'border-top' && player.angle===270){
            console.log('this is the colored side')
             $('.fieldBox').addClass('win')
          }
          console.log('border-top');

        }else
        //bottom collision
        if(ptop >= btop+blength){
          if(side1 === 'border-bottom' && player.angle===90){
            console.log('this is the colored side')
            $('.fieldBox').addClass('win')

          }
          console.log('border-bottom');

        }else
        //left collision
        if(pleft + plength <= bleft){
          if(side1 === 'border-left' && player.angle === 180){
            console.log('this is the colored side');
            $('.fieldBox').addClass('win');
            onWin();
          }
          console.log('border-left')
        }else
        //right collision
        if(pleft + plength>= bleft + blength ){
          if(side1 === 'border-right' && player.angle === 0){
            console.log('this is the colored side')
             $('.fieldBox').addClass('win')

          }
          console.log('border-right')

        }
      }

  })
}

if(collision(box1)){$('.wrapper').css('background-color','blue')}


















