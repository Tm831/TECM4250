import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import * as routes from './constants/routes';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import Requirements from './components/Requirements';
import UseCases from './components/UseCases';
import Testing from './components/Testing';
import Trello from './components/Trello';
import RequirementsQuiz from './components/RequirementsQuiz';
import UseCasesQuiz from './components/UseCasesQuiz';
import TestingQuiz from './components/TestingQuiz';
import TrelloQuiz from './components/TrelloQuiz';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route exact path={routes.TRELLO} component={() => <Trello />} />
            <Route exact path={routes.REQUIREMENTS} component={() => <Requirements />} />
            <Route exact path={routes.USECASES} component={() => <UseCases />} />
            <Route exact path={routes.TESTING} component={() => <Testing />} />
            <Route exact path={routes.TRELLO_QUIZ} component={() => <TrelloQuiz />} />
            <Route exact path={routes.REQUIREMENTS_QUIZ} component={() => <RequirementsQuiz />} />
            <Route exact path={routes.USECASES_QUIZ} component={() => <UseCasesQuiz />} />
            <Route exact path={routes.TESTING_QUIZ} component={() => <TestingQuiz />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
