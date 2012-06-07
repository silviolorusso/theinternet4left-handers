// inject a style for hyperlinks and elements set with cursor:pointer
if(!document.getElementById( 'lefty-left' )){
    var styleLeft = document.createElement("style");
    styleLeft.id = 'lefty-left';
    document.head.appendChild(styleLeft);
    styleLeft.innerHTML = "a, .left-hand { cursor: url(http://www.silviolorusso.com/theinternet4left-handers/hand.png),auto !important; }";
}

// debouncing
var timer;
var doStuff = function() {
    timer = null;
    
    // add a class for all input type="image" (default cursor is pointer in Chrome)
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'image') {
            if (inputs[i].className.indexOf( "left-hand" ) == -1 ) {
                inputs[i].className = inputs[i].className + " " + "left-hand";
            }
      }
    };
    // change all elements that have pointer as cursor set in (computed) style
    var elms = document.getElementsByTagName("*");
    if( typeof getComputedStyle == "undefined") getComputedStyle = function(elem) {return elem.currentStyle;};
    var elms = document.getElementsByTagName("*"), l = elms.length, i;
    for( i=0; i<l; i++) {
        if( getComputedStyle(elms[i]).cursor.toLowerCase() === "pointer") {
            elms[i].className = elms[i].className + " " + "left-hand";
        }
    }
    console.log('changed');
};


document.addEventListener('DOMNodeInserted', function() {
    if (timer) {
        window.clearTimeout(timer);
    }
    timer = window.setTimeout(doStuff, 1000);
}, false);






    