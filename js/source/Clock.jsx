import React, {Component} from "react";

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }
    componentWillMount(){
        this.getRemainingTime(this.props.futureDate);
    }
    componentDidMount(){
        setInterval(() => this.getRemainingTime(this.props.futureDate), 1000 );
    }
    getRemainingTime(futureDate){
        const time = Date.parse(futureDate) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days,hours,minutes,seconds});
    }

    render(){
        return(
            <div className="Clock">
                <div className="Remain days">{this.state.days} days</div>
                <div className="Remain hours">{this.state.hours} hours</div>
                <div className="Remain minutes">{this.state.minutes} minutes</div>
                <div className="Remain seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}
export default Clock