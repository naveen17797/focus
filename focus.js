// Focus first input field on slash key press.
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if ( charStr !== '/' ) {
    	return;
    }
    var inputs = document.querySelectorAll('input[type=text], input[type=search]')
    if ( inputs.length === 0 ) {
        console.log("Found 0 inputs, cant focus.")
    	return;
    }

    inputs[0].focus()

};