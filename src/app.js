console.log('app.js online');

console.log($())
 const box1 = new FieldBox('#07C3F7');
  const player = new PlayerBox();

 $(function movement() {
  // !!!!!!!!!!The following code is taken almost verbatim from patrick!!!!!!!!
  //       I tried to use css transforms for all the movement functions
  //       but they got in each others way, for the rotate, transform is
  //       the easiest way to do it and it doesn't seem to interact with
  //       the other movements.
        let angle = 0;
        $(window).on('keydown', function(e) {
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
  $(window).on('keyup',function() {
    let ptop = parseInt($('.playerBox').css('top'));
    let pleft = parseInt($('.playerBox').css('left'));
    let btop = parseInt(aBox.yCoord);
    let bleft = parseInt(aBox.xCoord);
    let plength = 30;
    let blength = aBox.sideLength;

    if((ptop <= btop + blength +10) && (ptop >= btop - plength - 10) && (pleft+plength >= bleft -10) && (pleft <= bleft+blength+5) ){


       // top collision
        if(ptop<=btop && pleft >= bleft && pleft+plength <= bleft+blength){
          if(side1 === 'border-top' && player.angle===270){
            console.log('this is the colored side')
          }
          console.log('border-top');
        return 'border-top';
        }
        //bottom collision
        if(ptop >= btop+blength && pleft >= bleft && pleft+plength <= bleft+blength){
          if(side1 === 'border-bottom' && player.angle===90){
            console.log('this is the colored side')
          }
          console.log('border-bottom');
          return 'border-bottom';
        }
        //left collision
        console.log('border-left')
        if(pleft + plength <= bleft && ptop >= btop && ptop+plength <= btop+blength){
          if(side1 === 'border-left' && player.angle === 180){
            console.log('this is the colored side');
          }
          return 'border-left';
        }
        //right collision
        if(pleft + plength>= bleft + blength && ptop >= btop && ptop+plength <= btop+blength){
          if(side1 === 'border-right' && player.angle === 0){
            console.log('this is the colored side')
          }
          console.log('border-right')
          return 'border-right';
        }
      }

  })
}

collision(box1);

















