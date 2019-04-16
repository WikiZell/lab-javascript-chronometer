var Chronometer = function (){
  this.seconds = 0
  this.minutes = 0
  this.milliseconds = 0
  this.time
  this.split = []

  this.startClick = function () {
    this.time = setInterval(() => {
      if (this.minutes < 99) {
        ++this.milliseconds

        this.printMilliseconds(this.milliseconds)

        if (this.milliseconds % 60 === 0) {
          //Seconds
          this.milliseconds = 0;
          ++this.seconds
          this.printSeconds(this.seconds);
        } else if (this.seconds % 60 === 0 && this.seconds !== 0) {
          //Minutes
          this.seconds = 0;
          ++this.minutes;
          this.printMinutes(this.minutes);
        }
      } else {
        //Minutes more then our watch display can support. Can't Start.
        clearInterval(this.time);
      }

    }, 10)
  }
  this.twoDigitsNumber = function (valueToConvert) {
    let stringValue = valueToConvert.toString().split(""),
      twoDigit;

    if (stringValue.length === 1) {
      twoDigit = stringValue.map(function (val) {
        return "0" + val;
      })
    } else {
      return valueToConvert;
    }
    return twoDigit;
  }

  this.stopClick = function () {
    clearInterval(this.time);
  }
  this.resetClick = function () { 
    this.seconds = 0
    this.minutes = 0
    this.milliseconds = 0
    this.split = [];
    document.querySelectorAll(".number,#milDec,#milUni").forEach(element => {
      element.innerText = 0;
    });

    var ol = document.getElementById("splits");
    ol.innerText = "";

  }
  this.splitClick = function () {
    //Cleanup OL if child are present befor append timeSplits
    var ol = document.getElementById("splits");
    ol.innerText = "";
    var SplitTime = `${this.twoDigitsNumber(this.minutes)}:${this.twoDigitsNumber(this.seconds)}:${this.twoDigitsNumber(this.milliseconds)}`;
    this.split.push(SplitTime);
    
    if(this.split.length > 0 ){
      this.split.map(function(timeItem){
        var liElement = document.createElement("LI");
        var liText = document.createTextNode(timeItem);
        liElement.appendChild(liText);
        ol.appendChild(liElement);
      })

    }

  }
  this.setStartBtn = function () {
    var btnStart = document.getElementsByClassName("stop")[0],
      btnReset = document.getElementsByClassName("split")[0];
    //STOP to START
    btnStart.classList.replace("stop", "start");
    btnStart.innerText = "START";
    //SPLIT to RESET
    btnReset.classList.replace("split", "reset");
    btnReset.innerText = "RESET";
  }
  this.setStopBtn = function () {
    var btnStart = document.getElementsByClassName("start")[0],
      btnReset = document.getElementsByClassName("reset")[0];
    //START to STOP
    btnStart.classList.replace("start", "stop");
    btnStart.innerText = "STOP";
    //RESET to SPLIT
    btnReset.classList.replace("reset", "split");
    btnReset.innerText = "SPLIT";
  }
  this.printMilliseconds = function (milliseconds) {
    let milDec = document.getElementById('milDec'),
      milUni = document.getElementById('milUni');

    if (milliseconds > 9) {

      let stringMilliseconds = milliseconds.toString().split("");
      milDec.innerText = stringMilliseconds[0];
      milUni.innerText = stringMilliseconds[1];

    } else {

      milDec.innerText = 0;
      milUni.innerText = milliseconds;
    }

  }
  this.printSeconds = function (seconds) {
    let secDec = document.getElementById('secDec'),
      secUni = document.getElementById('secUni');

    if (seconds > 9) {

      let stringSeconds = seconds.toString().split("");
      secDec.innerText = stringSeconds[0];
      secUni.innerText = stringSeconds[1];

    } else {

      secDec.innerText = 0;
      secUni.innerText = seconds;
    }
  }
  this.printMinutes = function (minutes) {
    let minDec = document.getElementById('minDec'),
        minUni = document.getElementById('minUni');
    if (minutes > 9) {
        
        var stringMinutes = minutes.toString().split("");
        minDec.innerText = stringMinutes[0];
        minUni.innerText = stringMinutes[1];
        
    } else {
        minDec.innerText = "0";
        minUni.innerText = minutes;
    }
}

}