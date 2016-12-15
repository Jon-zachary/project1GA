console.log('app.js online');

console.log($())

 $(function movement() {
  //!!!!!!!!!!The following code is taken almost verbatim from patrick!!!!!!!!
        //I tried to use css transforms for all the movement functions
        //but they got in each others way, for the rotate, transform is
        //the easiest way to do it and it doesn't seem to interact with
        //the other movements. TODO: make it so holding down a button
        //has no effect.
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


 let box1 = new FieldBox('#07C3F7','top');
 let box2 = new FieldBox('lightpink','bottom');
 let box3 = new FieldBox('springgreen','left');
 let box4 = new FieldBox('gold','right');


 box1.drawBox();
 box2.drawBox();
 box3.drawBox();
 box4.drawBox();










