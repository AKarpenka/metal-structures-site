/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideCallModal, hideSendModal } from '../../redux/actions/modalAction';
import AboutUsHeader from '../../components/about-us-header/AboutUsHeader';
import Header from '../../components/header/Header';
import Production from '../../components/production/Production';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import HowWeWork from '../../components/how-we-work/HowWeWork';
import WhyWe from '../../components/why-we/WhyWe';
import TrustUs from '../../components/trust-us/TrustUs';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import Footer from '../../components/footer/Footer';
import './Main.scss';

export class Main extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    hideModalWindow = () => {
        this.props.hideCallModal();
        this.props.hideSendModal();
    };

    render() {
        const { isShownCallPopup, isShownSendPopup, history } = this.props;
        return (
            <div>
                <Header history={history} />
                {isShownCallPopup ? <CallModal /> : <div />}
                {isShownSendPopup ? <SendModal /> : <div />}
                <div
                    className={isShownCallPopup || isShownSendPopup ? 'overlay' : ''}
                    onClick={this.hideModalWindow}
                />
                <div className="header-image">
                    <div className="blue-trans-rect" />
                    <AboutUsHeader />
                </div>
                <Production />
                <HowWeWork />
                <WhyWe />
                <TrustUs />
                <SendUs />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

Main.propTypes = {
    isShownCallPopup: PropTypes.bool,
    isShownSendPopup: PropTypes.bool,
    hideCallModal: PropTypes.func,
    hideSendModal: PropTypes.func,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    isShownCallPopup: state.modal.isShownCallPopup,
    isShownSendPopup: state.modal.isShownSendPopup
});

const mapDispatchToProps = {
    hideCallModal,
    hideSendModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);