import React, { Component, PropTypes } from 'react';

import Sticker from './Sticker';
import stickerData from './../stubs/sticker';

class Wall extends Component {
    static propTypes = {
    }

    constructor(props) {
        super(props);

        this.state = {
            stickers: stickerData.list,
        };
    }

    componentDidMount() {}

    /**
     *  Рендер стикеров
     *
     * @return {object} stickers
     */
    _renderStickers = () => {
        const { stickers } = this.state;

        return stickers.map((sticker, i) => (<Sticker key={i} stickerData={sticker} />));
    }


    render() {
        const stickers = this._renderStickers();

        return (
            <div
                style={{
                    marginTop: '60px',
                }}
            >
                <div className="row">
                    {stickers}
                </div>
            </div>
        );
    }
}

export default Wall;
