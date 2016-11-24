import React, { Component } from 'react';

import Header from './Header';
import Sticker from './Sticker';
import stickerData from './../stubs/sticker';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stickers: stickerData.list,
        };
    }

    componentDidMount() {

    }

    /**
     *  Рендер стикеров
     *
     * @return {object} stickers
     */
    _renderSticker = () => {
        const { stickers } = this.state;

        return stickers.map((sticker, i) => (<Sticker key={i} sticker={sticker} />));
    }

    render() {
        const stickers = this._renderSticker();

        return (
            <div>
                <Header />
                <div
                    style={{
                        marginTop: '60px',
                    }}
                >
                    <div className="row">
                        {stickers}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
