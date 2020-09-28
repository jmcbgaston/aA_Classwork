import {htmlGenerator} from "./warmup";

// class = clock-holder
// id = clock

{/* <div class="clock-holder">
  <div id="clock"></div>
</div> */}

class Clock {
    constructor() {
        // 1. Create a Date object.
        const currentTime = new Date();

        // 2. Store the hour, minute, and second.
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        // 3. Call printTime.
        // this.printTime();
        
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
        
        htmlGenerator(this.printTime(), clockElement);
        // console.log(clockElement);
        
        // You'll also want to make sure that whenever a new clock is constructed the htmlGenerator is also run to make sure that as soon as the page loads the clock is visible. Test it out!
    }

    printTime() {
        // Format the time in HH:MM:SS
        const timeString = [this.hours, this.minutes, this.seconds].join(":");

        // Use console.log to print it.
        return timeString;
    }

    _tick() {
        // 1. Increment the time by one second.
        this._incrementSeconds();

        // 2. Call printTime.
        htmlGenerator(this.printTime(), clockElement);
    }

    _incrementSeconds() {
        // 1. Increment the time by one second.
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }
}

// const clockElement = document.getElementById('clock');
const clockElement = document.getElementById('clock');
const clock = new Clock();

// append(clock.printTime())

// htmlGenerator(clock.printTime(), clockElement);