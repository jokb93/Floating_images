document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    
    height = $(window).height() / 2;   // returns height of browser viewport
    width = $(window).width() / 2;   // returns width of browser viewport

    widthperc = width / 100/2;
    heightperc = height / 100;

    console.log(5 * ((y - height) / heightperc / 100));
    console.log(5*((x - width) / widthperc/100));

    $("#frontFrame").css("transform", "perspective( 100vw ) rotatex( " + (0.5 * ((y - height) / heightperc / 100)) + "deg ) rotateY( " + (0.5 * ((x - width) / widthperc / 100)) + "deg )")
    $("#innerFrame").css("transform", "perspective( 10vw ) rotatex( " + (0.1 * ((y - height) / heightperc / 100)) + "deg ) rotateY( " + (0.1 * ((x - width) / widthperc / 100)) + "deg )")

}