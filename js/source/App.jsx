import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            futureDate: "November 2, 2017",
            NewFutureDate: ""
        }
    }
    changeFutureDate() {
        (this.state.NewFutureDate == "") ? alert("please enter some date to change") : this.setState({ futureDate: this.state.NewFutureDate });
    }
    render() {
        return (
            <div className="container">
                <h1><span>Countdown App</span></h1>
                <div className="App" >
                    <h2>Countdown to {this.state.futureDate}</h2>
                    <Clock futureDate={this.state.futureDate}></Clock>
                    <div className="inpt"><input className="input" id="inpt" type="text" placeholder="new date" onChange={event => this.setState({ NewFutureDate: event.target.value })} /></div>
                    <div className="btn"><input className="button" type="submit" value="Change" onClick={() => this.changeFutureDate()} /></div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App></App>,
    document.getElementById("root")
)
