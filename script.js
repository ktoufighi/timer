document.addEventListener('DOMContentLoaded', function () {
    // we are going to create variables to query DOM for our hours, 
    // mints, seconds and miliseconds.
    var hours = document.getElementById('hours'),
        mints = document.getElementById('mints'),
        seconds = document.getElementById('seconds'),
        miliseconds = document.getElementById('miliseconds'),

    // similarly we need query the DOM for buttons
        startBtn = document.getElementById('startBtn'),
        pauseBtn = document.getElementById('pauseBtn'),
        stopBtn = document.getElementById('stopBtn'),
        resetBtn = document.getElementById('resetBtn'),
        setTime,
        currentTime,
        difference,
        timer = 0,
        interval;


    var start = function () {
        setTime = Date.now();
        interval = setInterval(update, 10);
    };

    var pause = function () {        
        clearInterval(interval);
    };

    var stop = function () {
        console.log('stop');
        clearInterval(interval);
        timer = 0;  
    };

    var reset = function () {
        console.log('reset');
        timer = 0;
        updateScreen();
        
    };

    var update = function() {
        currentTime = Date.now(); 
        difference = currentTime - setTime; 

        // we want to increment by adding the difference to our time
        timer += difference;
        setTime = currentTime;
        updateScreen();
    };

    var updateScreen = function () {
        // here we print the miliseconds on the screen using innerText method
        //timeRaw is seconds and miliseconds displayed first we only need to grab the miliseconds
        // which we would need a operation to get rid of the seconds, by using parseInt() to only display miliseconds
        // since it is decimal value we will need to % 1 and * by 100.
        var timeRaw = timer/1000,
            timeMiliSeconds = parseInt((timeRaw % 1) * 100);
            // to display the seconds, we need to go back to timeRaw and grab the first part which is the seconds
            timeSeconds = Math.floor(timeRaw); 
            timeMints = Math.floor(timeSeconds/60);
            timeHours = Math.floor(timeMints/60);

        // and now we need to print it out in our innerText area
        miliseconds.innerText = timeMiliSeconds;
        seconds.innerText = twoDigiter(processSixty(timeSeconds));
        mints.innerText = twoDigiter(processSixty(timeMints));
        hours.innerText = twoDigiter(timeHours);

    };
    // making sure we have our seconds, mints and hours show in 2 digit format
    var twoDigiter = function (number) {
        var numberStr = number.toString();
        if(numberStr.length < 2) {
            return "0" + numberStr;
        } else {
            return numberStr;
        }
    };

    // a function to process 60 when we reach 60 seconds or 60 minutes it should default to 0 and not continue to 61, 62 etc.
    // we want to see if that is divisible by 60 like 120 % 60 is 2 minutes, 121 is divisible by 60 with extra of 1
    var processSixty = function(number) {
        var divisible = Math.floor(number/60); 
        if (number/60 >= divisible) { 
            return number - 60 * divisible;
        }
    };


    if(startBtn) { 
        startBtn.addEventListener('click', start)
    };

    if(pauseBtn) { 
        pauseBtn.addEventListener('click', pause)
    };

    if(stopBtn) { 
        stopBtn.addEventListener('click', stop)
    };

    if(resetBtn) { 
        resetBtn.addEventListener('click', reset)
    };

});