import React from 'react';
import './Spinner.scss';

export default function Spinner() {
    return (
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}