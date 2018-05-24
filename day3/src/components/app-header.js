import React from 'react';
import { NavLink } from 'react-router-dom';

export class AppHeader extends React.Component {
    render() {

        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">Contacts Manager</a>
                </div>
                <ul className="nav navbar-nav navbar-left">
                    <li><NavLink to="/add-new">Add new</NavLink></li>
                    <li><NavLink to="/contact-us">Contact us</NavLink></li>
                </ul>
            </div>
        );
    }
}