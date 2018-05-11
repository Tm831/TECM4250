import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import Highlight from 'react-highlight';

const ToTop = () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

const ToQuiz = () => {
    const styles = {textAlign: 'center', marginLeft: 'auto', marginRight:'auto'}
    const topStyle = {backgroundColor: '#e5e5e5', paddingTop: '2px', paddingBottom:'2px',}


    return(
        <div style={styles} >
            <h3 style={topStyle} onClick={ToTop}>Back to top of page</h3>
            <hr />
            <h1>Test Your Learning</h1>
            <Link to={routes.REQUIREMENTS_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Requirements = () => {

    return (
        <div className="InfoPage">
            <h1>Requirements</h1>
            <h2>What are Software Requirements</h2>
            <p>Requirements have two groups: functional and non-functional. Requirements consist of the features for a specific piece of software; for example, a log in screen for facebook is in the requirements for the site. </p>
            <h2>Functional Requirements</h2>
            <p>In Software engineering and systems engineering, a functional requirement defines a function of a system or its component. A function is described as a set of inputs, the behavior, and outputs.
            Functional requirements may be calculations, technical details, data manipulation and processing and other specific functionality that define what a system is supposed to accomplish.Behavioral requirements describing all the cases where the system uses the functional requirements are captured in use cases. Generally, functional requirements are expressed in the form the system must do "requirement". The plan for implementing functional requirements is detailed in the system design.</p>            
            <p>For example, Facebook requires a log-in screen to protect user confidentiality. This is an aspect of the project that is required for the program.</p>
            <h2>Non-Functional Requirements</h2>
            <p>In Software engineering and systems engineering, non-functioal requirements defines a function of the system that is not neccessary, but adds an aspect to the project. Non-functional requirements (also known as quality requirements) are the system shall be "requirement". The plan for implementing non-functional requirements is detailed in the system architecture.</p>
            <p>For example, Facebook having a messaging system for users to interact. This aspect does not make the the code unusable, but adds an aspect that is nice to use.</p>
            <h2>Importance of Requirements</h2>
            <p>The requirements is important because this is the detail of a program. This is the outline of all the features that users want in their software. This document is very specific, outlining all the functional and non-functional requirements, but change and update through development.</p>
            <ToQuiz />
        </div>
    );
}


export default Requirements;