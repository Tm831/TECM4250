import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/InfoPage.css';

const ToTop = () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

const ToQuiz = () => {
    const styles = {textAlign: 'center', marginLeft: 'auto', marginRight:'auto'}
    const topStyle = {backgroundColor: 'green', paddingTop: '2px', paddingBottom:'2px',}


    return(
        <div style={styles} >
            <h3 style={topStyle} onClick={ToTop}>Back to top of page</h3>
            <hr />
            <h1>Test Your Learning</h1>
            <Link to={routes.TRELLO_QUIZ}><button>Take the quiz on this</button></Link>
        </div>
    )
}

const Trello = () => {
    return (
        <div className="InfoPage">
            <a href="trello.com"><h1>Trello</h1></a>
            <h2>What is Trello?</h2>
            <p>Trello is a tool to help organize the process of projects. Trello is useful to organize the different steps to produce software. Trelo is a Kanban method of organization.  Kanban is a method for managing the creation of products with an emphasis on continual delivery while not overburdening the development team.</p>
            <h2>How to use Trello</h2>
            <p>Trello uses cards to add tasks to a project. The cards change by dragging them into different sections of development process. You are able to change the title's of sections for different aspects of the development procss; for example, labeling different phases of the project.</p>
            <img src={require('../images/TrelloCards.JPG')}/>
            <p>Trello has a few feeatures to make the organization easier. Trello offers a filter option to see only a selection of cards if you only need to focus on a few. Trello can also add due dates to specific cards as deadlines and reminders, which can be synced into your personal calendar.</p>
            <img src={require('../images/TrelloMenu.JPG')}/>
            <h2>Should I use Trello?</h2>
            <p>Trello is a helpful tool that organizes the development process for projects like software developement. Trello offers specific features to make the organization part of development easier. This makes the development part of software easier because you can stay on task.</p>
            <h2>Is Trello the only method?</h2>
            <p>Trello is a popular method or organization, but there are other types of organization for projects. Agile, Waterfall, and Scrum are a few alternatives of organization besides the Kanban method. They each have various aspects to help organize projects.</p>
            <ToQuiz />
        </div>
    );
}

export default Trello;