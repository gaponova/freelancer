$(document).ready(function() {
  $("#lightSlider").lightSlider(); 
  freeMove: true
});


$("#lightSlider").lightSlider({
  item: 1,
  mode: 'fade',
  auto: true,
  loop: true,
  keyPress: true,
  enableDrag: true,
  freeMove: true
});