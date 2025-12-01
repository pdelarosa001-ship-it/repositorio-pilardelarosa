onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(255, 10), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/17.-King-Of-Watches---Victor-Mendivil-x-Neto--n-Vega.mp3", false);
});
onEvent("text_input1", "click", function( ) {
  setProperty("screen1", "image", "assets/descarga.png");
});
