import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            timer: null,
        };
    }

    componentDidMount() {
        this.startClock();
    }

    componentWillUnmount() {
        this.stopClock();
    }

    startClock() {
        this.setState({
            timer: setInterval(
                () =>
                    this.setState({
                        date: new Date(),
                    }),
                1000
            ),
        });
    }

    stopClock() {
        clearInterval(this.state.timer);
        this.setState({
            timer: null,
        });
    }

    toggleClock() {
        if (this.state.timer) {
            this.stopClock();
        } else {
            this.startClock();
        }
    }

    render() {
        const { remove, id } = this.props;

        return (
            <div>
                <h1>A Classy Clock! ({id})</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>

                <button className="toggle" onClick={() => this.toggleClock()}>
                    {this.state.timer ? "Stop" : "Start"}
                </button>
                <button className="remove" onClick={remove}>
                    Remove me!
                </button>
            </div>
        );
    }
}
