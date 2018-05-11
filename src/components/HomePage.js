import React, { Component } from 'react';

const HomePage = () => {
    return (
        <div className="InfoPage">
            <h1>Introduction to Software Testing</h1>
            <h2>Name: Thomas Miller</h2>
            <h2>Class: TECM 4250, Spring 2018</h2>
            <p>This module contains information on the software testing lifecycle.</p>
            <p>The topics in this training module are: </p>
            <ul>
                <li>Trello Organization</li>
                <li>Requirements</li>
                <li>Use Cases</li>
                <li>Testing</li>
            </ul> 
        </div>
    );
}

export default HomePage;