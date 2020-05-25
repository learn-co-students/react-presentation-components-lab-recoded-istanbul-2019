// Code SimpleComponent Here
import React, { Component } from 'react';
class ComponentName extends Component {
    constructor(props) {
        super(props);

        // Initial state here...
        this.state = {
            mood: "happy"
        };
    }

    handleClick = () => {
        // Probably do some work to update the state
        const notMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({ mood: notMood });
    }

    render() {
        // Return JSX that renders into HTML
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}
export default ComponentName;