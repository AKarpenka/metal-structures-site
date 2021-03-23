/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideCallModal } from '../../redux/actions/modalAction';
import AboutUsHeader from '../about-us-header/AboutUsHeader';
import Header from '../header/Header';
import Production from '../production/Production';
import './Main.scss';

export class Main extends React.Component {
    hideCallModalWindow = () => {
        this.props.hideCallModal();
    };

    render() {
        const { isShownCallPopup } = this.props;
        return (
            <div>
                <Header />
                <div
                    className={isShownCallPopup ? 'overlay' : ''}
                    onClick={this.hideCallModalWindow}
                />
                <div className="header-image">
                    <div className="blue-trans-rect" />
                    <AboutUsHeader />
                </div>
                <Production />
            </div>
        );
    }
}

Main.propTypes = {
    isShownCallPopup: PropTypes.bool,
    hideCallModal: PropTypes.func
};

const mapStateToProps = state => ({
    isShownCallPopup: state.modal.isShownCallPopup
});

const mapDispatchToProps = {
    hideCallModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
