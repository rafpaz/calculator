import React, { Component } from 'react';
import ScreenRow from './screenRow';
import PropTypes from 'prop-types';

const screen = (props) => {
    return (
        <div className="screen">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.answer} />
        </div>
    );
}

Screen.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}

export default screen;