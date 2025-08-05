import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    render() {
        console.log("clock component rendered");
        const { date, locale } = this.state;

        return (
            <>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>

                <Button change={this.handleClick} locale="en-US" />
            </>
        );
    }
}

export default Clock;
