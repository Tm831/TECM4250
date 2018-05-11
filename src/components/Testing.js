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
            <Link to={routes.TESTING_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Testing = () => {
    return (
        <div className="InfoPage">
            <h1>Testing</h1>
            <h2>What is Software Testing</h2>
            <p>Software Testing is the final stage after implenting the requirements for the project. This stage is where most of the code gets reworked and altered before deployement.</p>
            <p>There are basic types of software testing: Unit testing, Functional testing, Usability testing, Integration testing. THere are various others, but these tests are a good start.</p>
            <h2>What is Unit Testing?</h2>
            <p>Unit testing is the testing of an individual unit or group of related units. It falls under the class of white box testing. It is often done by the programmer to test that the unit he/she has implemented is producing expected output against given input.</p>
            <h2>What is Functional Testing?</h2>
            <p>Functional testing is the testing to ensure that the specified functionality required in the system requirements works. It falls under the class of black box testing.</p>
            <h2>What is Usability Testing?</h2>
            <p>This form of testing is used to determine how user-friendly the software is to use.</p>
            <p>Usability testing is performed to the perspective of the client, to evaluate how the GUI is user-friendly? How easily can the client learn? After learning how to use, how proficiently can the client perform? How pleasing is it to use its design? This falls under the class of black box testing.</p>
            <h2>What is Integration Testing?</h2>
            <p>Integration testing is testing in which a group of components are combined to produce output. Also, the interaction between software and hardware is tested in integration testing if software and hardware components have any relation. It may fall under both white box testing and black box testing. </p>
            <h2>How often should Testing occur?</h2>
            <p>Testing should be occuring through the entire project. This is part of the Software Development LifeCycle, where this is the end and the begining of development. Testing should be occuring regularly to fix and adjust the aspects of the software.</p>
            <ToQuiz />
        </div>
    );
}

export default Testing;