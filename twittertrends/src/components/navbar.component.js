import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">TrendingTopics</Link>
                <Link to="/tweets" className="navbar-brand">Trending Tweets</Link>
                <Link to="/mostcommonwords" className="navbar-brand">Goal 1</Link>
                <Link to="/topics" className="navbar-brand">Goal 2</Link>
                <Link to="/commontopics" className="navbar-brand">Goal 3</Link>
                {/*<div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/tweets" className="nav-link">Trending Tweets</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>*/}
            </nav>
        );
    }
}