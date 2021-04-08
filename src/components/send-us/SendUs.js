import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSendModal } from '../../redux/actions/modalAction';
import Drawing from '../../assets/images/chertez.png';
import './SendUs.scss';

export class SendUs extends React.Component {
    showSendModalWindow = () => {
        this.props.showSendModal();
    };

    render() {
        return (
            <div className="send-us-rect">
                <div className="max-width-1090">
                    <img src={Drawing} alt="img" />
                    <div className="corner-header text-right">
                        <div className="corner-right" />
                        <div className="corner-text">
                            <div>ЕСТЬ ЧЕРТЕЖ?</div>
                            <div>ОТПРАВЬТЕ ЕГО НА РАСЧЕТ</div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.showSendModalWindow}
                            >
                                ОТПРАВИТЬ ЧЕРТЁЖ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SendUs.propTypes = {
    showSendModal: PropTypes.func
};

const mapDispatchToProps = {
    showSendModal
};

export default connect(null, mapDispatchToProps)(SendUs);
