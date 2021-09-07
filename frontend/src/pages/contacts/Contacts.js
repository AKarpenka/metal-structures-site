/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import CallModal from '../../components/modals/call/CallModal';
import SendModal from '../../components/modals/send/SendModal';
import ContactsBlock from '../../components/contacts/Contacts';
import SendUs from '../../components/send-us/SendUs';
import ContactUs from '../../components/contact-us/ContactUs';
import './Contacts.scss';

export class Contacts extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { isShownCallPopup, isShownSendPopup, history } = this.props;
        return (
            <div>
                <Header history={history} />
                {isShownCallPopup ? <CallModal /> : <div />}
                {isShownSendPopup ? <SendModal /> : <div />}
                <div className={isShownCallPopup || isShownSendPopup ? 'overlay' : ''} />
                <ContactsBlock />
                <SendUs />
                <ContactUs />
            </div>
        );
    }
}

Contacts.propTypes = {
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

export default connect(mapStateToProps, null)(Contacts);
