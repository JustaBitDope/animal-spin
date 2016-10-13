var total_time = 100;
var animal_height = 80;  // Unused
var sun_rad = 100;       // Unused (at the moment!)

function main() {

  // Setting Rotation Times
  var i = 1;
  $('.animals').children().each(function() {
    var time = total_time / i;
    //console.log("Time "+i+":", time);
    $(this).css({"animation-name": "spin",
                 //"animation-delay": "2s",
                 "animation-duration": time.toString()+"s",
                 "animation-iteration-count": i.toString() });
    $(this).toggleClass("paused");
    i++;
  });
  
  setRadius();

  // Animation Pausing
  $('.sun').click(function() {
    $('.animal').toggleClass("paused");
  })

  // Animal hide on click
  $('.animal').click(function() {
    $(this).hide();
    var animal = $(this).attr('class').split(" ")[1];
    console.log("Hid the", animal, "("+(typeof animal)+")");
  });
}


function setRadius() {
  var w = $(window).width();
  var h = $(window).height();

  var radius = Math.min(w,h);
  console.log("Rad: ", radius);

  // Sun
  var sunMove = ((radius-(80+80+100))/2).toFixed(0).toString()+"px"
  // console.log("Sun Shift: ", sunMove)
  $('.sun').css({"margin-top": sunMove})

  // Animal circle radius
  var zooRad = (((radius*100)/2)/80).toFixed(2).toString()+"%"
  // console.log("Animal Rad: ", zooRad);
  $('.animals').children().each(function() {
      $(this).css({"transform-origin": "50% "+zooRad})
  })
}


$(window).resize(function() {
  setRadius();
})


$(document).ready(main);
