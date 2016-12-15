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
            $('.square').animate({'top':'+=15'},25)
          }
          //up
          if(e.which === 38) {
            $('.square').animate({'top':'-=15'},25)
          }
          //right
          if(e.which === 39) {
            $('.square').animate({'left':'+=15'},25)
          }
          //left
          if(e.which === 37) {
            $('.square').animate({'left':'-=15'},25)
          }
          //rotate
          if(e.which === 32){
             angle  = (angle + 90) % 360;
            $('.square').css({'transform': 'rotate(' + angle + 'deg)'});
          }
        })
    });

