function attachEventsListeners() {

    let days = document.getElementById('days');
    let daysButton = document.querySelector('#daysBtn');

    let hours = document.getElementById('hours');
    let hoursButton = document.querySelector('#hoursBtn');

    let minutes = document.querySelector('#minutes');
    let minutesButton = document.querySelector('#minutesBtn');

    let seconds = document.querySelector('#seconds');
    let secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', daysConvert);
    hoursButton.addEventListener('click', hoursConvert);
    minutesButton.addEventListener('click', minutesConvert);
    secondsButton.addEventListener('click', dsecondConvert);

    function daysConvert(params) {
        //days.value = hous.value / 24;
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
        /*if (days.value === null) {
            days.value = hous.value / 24;
        } else if (hours.value === null) {
            hours.value = days.value * 24;
        } else if (minutes.value === null) {
            minutes.value = hours.value * 60;
        } else if (seconds.value === null) {
            seconds.value = minutes.value * 60;
        }*/
    }

    function hoursConvert(params) {
        days.value = hours.value / 24;
        //hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    function minutesConvert(params) {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        //minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    function dsecondConvert(params) {
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        //seconds.value = minutes.value * 60;
    }
}