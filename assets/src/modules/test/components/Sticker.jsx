import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Sticker extends Component {
    static propTypes = {
        sticker: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = Object.assign({
            showModal: false,
        }, props.sticker);
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
            // dateBegin,
            // dateEnd,
            content,
            // fixatorType,
        } = this.state;
        const key = `sticker-${id}`;
        const modal = this._renderModal();

        return (
            <div
                onClick={this._handleClickOnSticker}
                key={key}
                className="cursor-pointer col-xs-3"
            >
                <div
                    className="panel sticker"
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
                        <h3 className="panel-title">{title}</h3>
                    </div>
                    <div className="panel-body">
                        <p className="sticker-preview-text">{content}</p>
                    </div>
                </div>
                {modal}
            </div>
        );
    }
}

export default Sticker;
