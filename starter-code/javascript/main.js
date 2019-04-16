var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var myChrono = new Chronometer();

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (this.classList.contains("start")) {
        myChrono.setStopBtn();
        myChrono.startClick();
    } else  {
        //setStartBtn();
        myChrono.setStartBtn();
        myChrono.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (this.classList.contains("split")) {
        myChrono.splitClick();
    } else if (this.classList.contains("reset")) {
        myChrono.resetClick();
    }


});
