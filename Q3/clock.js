class Clock {

    constructor(hours, minutes, seconds, country) {

        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;

    }

    convertToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    show() {
        return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`;
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

}

$(document).ready(function () {            
    $("#clockForm").submit(addClock);
});


let clocks = [];

function addClock() {

    const hours = parseInt($('#hours').val());
    const minutes = parseInt($('#minutes').val());
    const seconds = parseInt($('#seconds').val());
    const country = $('#country').val();
    const newClock = new Clock(hours, minutes, seconds, country);
    clocks.push(newClock);

    //console.log(clocks);

    document.getElementById('clockForm').reset();
    displayClocks();
    return false;

}

function displayClocks() {

    if (clocks.length != 2) {
        return;

    }

    else {

        const clockListDiv = document.getElementById('clockList');
        clockListDiv.innerHTML = '';

        clocks.forEach(clock_i => {

            const clockDiv = document.createElement('div');
            clockDiv.textContent = `Country: ${clock_i.country}, Time: ${clock_i.show()}, Seconds: ${clock_i.convertToSeconds()}`;
            clockDiv.style.height = "20px"
            clockListDiv.appendChild(clockDiv);

        });

        clocks.length = 0;

    }

}
