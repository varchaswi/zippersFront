import React from 'react';
import './dropdown.css';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            topic: 'setorders'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange(e) {
        e.preventDefault();
        //MQTT client is passed on
        this.setState({ topic: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault()
        //MQTT client is passed on
        const { mqtt } = this.props;
        mqtt.publish(this.state.topic, 'My Message');
    }

    componentDidMount(){
    
    }

    render() {
        return (
            <div className="dropdown" style={{ background: "red", width: "auto" }} >
                <select onChange={this.handleChange}>
                    <option value="select" disabled>Select</option>
                    <option value="setorders">Load Roleopen Orders</option>
                    <option value="/test2">Update Gapping Orders</option>
                    <option value="settings/rfid">RFID</option>
                    <option value="audi">Audi</option>
                </select>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>);
    }
}

export default Dropdown;

