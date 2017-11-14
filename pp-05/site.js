$(document).ready(function() {
  /*if a user has JavaScript, then delete the audio*/
  $('#ring').remove();
  /* when the doorbell is pressed, let it ring*/
  $('#doorbell').on('click', function(){
    ringDoorbell();
  });
  /* ring when the key "r" is pressed */
  $(document).on("keypress", function(press){
    if (press.key === "d") {
      ringDoorbell();
    }
  });
  /*The function that will play the audio*/
  function ringDoorbell() {
    var bell = new Audio('media/doorbell.mp3');
    bell.play();
  }
});
