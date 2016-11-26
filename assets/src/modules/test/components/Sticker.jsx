import React, { PropTypes, Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

class Sticker extends Component {
    static propTypes = {
        stickerData: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = Object.assign({
            showModal: false,
            minimize: false,
        }, props.stickerData);
    }

    componentDidMount() {}

    /**
     * Обработчик нажатия на стикер
     */
    _handleClickOnSticker = () => {
        this.setState({
            showModal: true,
        });
    }

    /**
     * Обработчик закрыть модального окна
     */
    _handleRequestClose = () => {
        this.setState({
            showModal: false,
        });
    }

    /**
     *  Обработчик нажатия на кнопку редактирования
     */
    _handleClickShowChangeModal = () => {
        console.log('handle click change');
    }

    /**
     * Обработчик нажатия на кнопку сворачивания стикера
     */
    _handleClickMinimizeSticker = () => {
        this.setState({
            minimize: !this.state.minimize,
        });
    }

    /**
     * Обработчик нажатия на кнопку удаления стикера
     */
    _handleClickRemoveSticker = () => {
        console.log('handle click remove');
    }

    /**
     * Рендер модального окна
     *
     * @return {object|string}
     */
    _renderModal() {
        const { showModal, content, title } = this.state;

        if (!showModal) {
            return '';
        }

        return (
            <Modal
                show={showModal}
                onHide={this._handleRequestClose}
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                        {title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {content}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this._handleRequestClose}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        const {
            id,
            title,
            color,
            borderColor,
            backgroundColor,
            minimize,
            content,
            // dateBegin,
            // dateEnd,
            // fixatorType,
        } = this.state;
        const key = `sticker-${id}`;
        const modal = this._renderModal();
        const bodyClass = `cursor-pointer panel-body ${minimize ? 'hidden' : ''}`;
        const panelClass = `panel ${minimize ? '' : 'sticker'}`;

        return (
            <div
                key={key}
                className="col-xs-3"
            >
                <div
                    className={panelClass}
                    style={{
                        borderColor,
                    }}
                >
                    <div
                        className="panel-heading"
                        style={{
                            color,
                            backgroundColor,
                        }}
                    >
                        <h3 className="panel-title sticker-title pull-left">
                            {title}
                        </h3>

                        <div className="pull-right">
                            <span
                                className="cursor-pointer glyphicon glyphicon-cog mr5"
                                onClick={this._handleClickShowChangeModal}
                            />
                            <span
                                className="cursor-pointer glyphicon glyphicon-minus mr5"
                                onClick={this._handleClickMinimizeSticker}
                            />
                            <span
                                className="cursor-pointer glyphicon glyphicon-trash"
                                onClick={this._handleClickRemoveSticker}
                            />
                        </div>

                        <div className="clearfix" />
                    </div>

                    <div
                        onClick={this._handleClickOnSticker}
                        className={bodyClass}
                    >
                        <p className="sticker-preview-text">{content}</p>
                    </div>
                </div>

                {modal}
            </div>
        );
    }
}

export default Sticker;
