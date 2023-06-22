'use strict';
// TIMER
// Set deadline date
const deadline = '2023-09-29';

// Calc date function
function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
        days = '0';
        hours = '0';
        minutes = '0';
        seconds = '0';
    } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((t / 1000 / 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
    }

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
}

// Set 0 before number function
function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else return num;

}

// Set clock date function
function setClock(selector, endtime) {
    // Get layout elements
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    // Create interval timer. You can use one of two options for the interval timer created with setTimeout or setInterval
    // const timeInterval = setInterval(updateClock, 1000); // Interval timer on setInterval
  
    let timeInterval = setTimeout(function tick() { // Interval timer on setTimeout
        updateClock();
        timeInterval = setTimeout(tick, 1000);
    }, 1000);
    
    // Update clock on layout right after load page
    updateClock();
    
    // Update clock function
    function updateClock() {
        const t = getTimeRemaining(endtime);
      
        // Stop interval timer
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.promotion__timer', deadline);
