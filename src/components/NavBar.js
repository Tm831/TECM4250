import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/NavBar.css';

const DropDown = () => {
    return (
        <div className='dropdown'>
            <button className="dropbutton">Quizzes</button>
            <div className="dropdown__content">
                <Link to={routes.TRELLO_QUIZ}><button>Trello</button></Link>
                <Link to={routes.REQUIREMENTS_QUIZ}><button>Requirements</button></Link>
                <Link to={routes.USECASES_QUIZ}><button>Use Cases</button></Link>
                <Link to={routes.TESTING_QUIZ}><button>Testing</button></Link>
            </div>
        </div>
    )
}

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <h1>Introduction to Software Development</h1>
                <div className="buttons">
                    <Link to={routes.HOME}><button>Home</button ></Link>
                    <Link to={routes.TRELLO}><button>Trello</button ></Link>
                    <Link to={routes.REQUIREMENTS}><button>Requirements</button ></Link>
                    <Link to={routes.USECASES}><button>Use Cases</button ></Link>
                    <Link to={routes.TESTING}><button>Testing</button ></Link>
                    <DropDown />
                </div>
            </div>
        )
    }
}

export default NavBar;