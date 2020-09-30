import React from 'react';

class Clock extends React.Component{
    constructor() {
        super();
        this.title = 'Clock';

        let td = new Date()
        this.state = {
            hours: td.getHours(),
            minutes: td.getMinutes(),
            seconds: td.getSeconds(),
            month: td.getMonth(),
            day: td.getDay(),
            year: td.getFullYear()
        }
        // debugger;

        this.tick = this.tick.bind(this);
    }
    
    componentDidMount() {
        // debugger;
        this.intervalId = setInterval(this.tick, 1000)
    }
    
    componentWillUnmount() {
        // debugger;
        clearInterval(this.intervalId)
    }
    
    tick() {
        // debugger;
        let time = new Date()
        this.setState({ 
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds()
        })
    } 

    render() {
        return (
            <div class="clock">
                <h1>{this.title}</h1>
                <div class="clockItems">
                <h2>Time:</h2>
                    <h3>{this.state.hours}:</h3>
                    <h3>{this.state.minutes}:</h3>
                    <h3>{this.state.seconds}</h3>             
                <h2>Date</h2>
                    <h3>{this.state.month}/</h3>
                    <h3>{this.state.day}/</h3>
                    <h3>{this.state.year}</h3>
                </div>
            </div>
        )
    }
}

export default Clock;