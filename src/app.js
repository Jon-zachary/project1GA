
let box1 = new FieldBox('#07C3F7');
let player = new PlayerBox();
$(box1).attr('id','box1');


 $(function movement() {
  // !!!!!!!!!!The following code relies heavily on patrick!!!!!!!!
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
  player.win=true;
  $('.fieldBox').addClass('win');
  $('.winner').css('display','block')
  $('.timer').css('display','none');
  $('#timetext').css('display','none');
}

function onLoss(){
  player.win=false
  $('.playerBox').addClass('lose');
  $('.loser').css('display','block');
  $('.timer').css('display','none');
  $('#timetext').css('display','none');

}

 // const box2 = new FieldBox('lightpink');
 // const box3 = new FieldBox('springgreen');
 // const box4 = new FieldBox('gold');

$('button').on('click',function(){
  location.reload();
})

 player.drawPlayer();
 box1.drawBox();
 let side1 = Object.keys(box1.side)[0]





function collision(aBox = box1){
  $('body').on('keydown',function() {
    const ptop = parseInt($('.playerBox').css('top'));
    const pleft = parseInt($('.playerBox').css('left'));
    const btop = parseInt(aBox.yCoord);
    const bleft = parseInt(aBox.xCoord);
    const plength = 30;
    const blength = aBox.sideLength;

    if((ptop <= btop + blength +10) && (ptop >= btop - plength - 10)
     && (pleft+plength+10 >= bleft ) && (pleft <= bleft+blength+5) )
    {
       // top collision
        if(ptop+plength<btop){
          if(side1 === 'border-top' && player.angle===270){
             onWin();
          }else{
            onLoss();
          }


        }else
        //bottom collision
        if(ptop >= btop+blength){
          if(side1 === 'border-bottom' && player.angle===90){
            onWin();
          }else{
            onloss();
          }

        }else
        //left collision
        if(pleft + plength <= bleft){
          if(side1 === 'border-left' && player.angle === 180){
            onWin();
          }else{
            onLoss();
          }

        }else
        //right collision
        if(pleft + plength>= bleft + blength ){
          if(side1 === 'border-right' && player.angle === 0){
            onWin();
          }else{
            onLoss();
          }
        }
      }

  })
}

function wallCollision(){
  $('body').on('keyup',function(){
  const ptop = parseInt($('.playerBox').css('top'));
  const pleft = parseInt($('.playerBox').css('left'));
  const plength = 30;
  const leftWall = parseInt($('.wrapper').css('left'));
  const topWall = parseInt($('.wrapper').css('top'));
  const lengthWall = parseInt($('.wrapper').css('width'));
  const heightWall = parseInt($('.wrapper').css('height'));

  if(ptop  < topWall){
    onLoss();
  } else
  if(pleft + 10< leftWall){
    onLoss();
  } else
  if(ptop+plength> topWall + heightWall){
    onLoss();
  } else if(pleft+plength > leftWall + lengthWall){
    onLoss();
  }
  })
}
//jquery timer plugin
$('.timer').startTimer({
  onComplete: function(){
    if(player.win===null){
    onLoss();
    }
   }
});

setInterval(collision(box1),1);
wallCollision();

















