/* eslint-disable no-unused-vars */
import React from 'react';
import './UpArrow.scss';

class UpArrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        if (window.scrollY === 0) {
            this.setState({
                isScrolled: false
            });
        } else if (window.scrollY > 0) {
            this.setState({
                isScrolled: true
            });
        }
    };

    goToTop = () => window.scrollTo(0, 0);

    render() {
        const { isScrolled } = this.state;
        return (
            <div>
                {isScrolled ? (
                    <div className="up-arrow-background" onClick={this.goToTop}>
                        <div className="up-arrow">
                            <i className="fa fa-chevron-up" aria-hidden="true" />
                        </div>
                    </div>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}

export default UpArrow;
