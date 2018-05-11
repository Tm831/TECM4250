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
            <Link to={routes.USECASES_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

    const UseCases = () => {
    return (
        <div className="InfoPage">
            <h1>Use Cases</h1>
            <h2>What are Use Cases?</h2>
            <p>Use cases are the visual representation of requirements. They are used to focus on specific rquirements to visualing see the actors involved with an action.</p>
            <h2>How do you create Use Cases?</h2>
            <p>Use Cases are stick figure drawings, actors, that connect to specific requirements. For example, a user wants to log in, logout, and send messages could be shown in a single use case. They would be the only actor in this example, but in others there may be more.</p>
            <img src={require('../images/UseCaseEx.JPG')}/>
            <h2>What Requirements need Use Cases?</h2>
            <p>Use cases should be created for all requirements. There may be some simple concepts that require more thought by a developer to see everyone who is connect. For example, when developing a payment system the act of authorizing payment has a few actors; users who pay, the payment system who is authorizing the payment, and the person receiving payment.</p>
            <p>Use cases are a simple way to break down the interconnected users fro most software development. They are easy to show who is connected, and allow for smarter and more agile programming and updating to a project.</p>
            <h2>Should Use Cases change?</h2>
            <p>Use Cases can change depending on the aspects of the program. For example, using a built in payment system will have less actors than someone who is developing a payment system.</p>
            <p>Use Cases can change when a project grows and allows more features. They can  be modified to connect more actors, or restrict old actors. They are very useful when developing software. </p>
            <ToQuiz />
        </div>
    );
}

export default UseCases;