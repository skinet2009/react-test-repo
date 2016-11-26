import React, { Component } from 'react';

import Header from './Header';
import Wall from './Wall';

class App extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header />
                <Wall />
            </div>
        );
    }
}

export default App;
