import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Buttons() {
    return(
        <div>
            <input className={"w3-radio"} type="radio" value="meters" name="charge" /> Per Square Meter
            <br />
            <input className={"w3-radio"} type="radio" value="tiles" name="charge" /> Per Tile
        </div>
    );
}

function TextInput(props){
    return(
        <div>
            <input className={"w3-input"} type="text" id={props.id} name={props.id} />
            <label>{props.labelName}</label>
        </div>
    );
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            charge: "meters"
        };
    }

    render(){
        return(
            <div>
                <h2>How would you like to pay?</h2>
                <Buttons /><br />
                <TextInput id="width" labelName="Enter Width" />
                <TextInput id="height" labelName="Enter Height" />
            </div>
        );
    }
}

function render() {
  //ReactDOM.render(<h2>Hello from React!</h2>, document.getElementById("app"));
  ReactDOM.render(<App />, document.getElementById("app"));
}

render();