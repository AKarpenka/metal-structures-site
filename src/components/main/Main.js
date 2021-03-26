/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideCallModal } from '../../redux/actions/modalAction';
import AboutUsHeader from '../about-us-header/AboutUsHeader';
import Header from '../header/Header';
import Production from '../production/Production';
import CallModal from '../modals/call/CallModal';
import ContactUs from '../contact-us/ContactUs';
import HowWeWork from '../how-we-work/HowWeWork';
import './Main.scss';
import Footer from '../footer/Footer';

export class Main extends React.Component {
    hideCallModalWindow = () => {
        this.props.hideCallModal();
    };

    render() {
        const { isShownCallPopup } = this.props;
        return (
            <div>
                <Header />
                {isShownCallPopup ? <CallModal /> : <div />}
                <div
                    className={isShownCallPopup ? 'overlay' : ''}
                    onClick={this.hideCallModalWindow}
                />
                <div className="header-image">
                    <div className="blue-trans-rect" />
                    <AboutUsHeader />
                </div>
                <Production />
                <HowWeWork />
                <ContactUs />
                <Footer />
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
