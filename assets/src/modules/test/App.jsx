import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };
    }

    componentDidMount() {

    }

    _handleChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        const { inputValue } = this.state;

        return (
            <div>
                <input
                    onChange={this._handleChangeInput}
                    type="text"
                    value={inputValue}
                />
                <br />
                <span>{inputValue}</span>
            </div>
        );
    }
}

export default App;
