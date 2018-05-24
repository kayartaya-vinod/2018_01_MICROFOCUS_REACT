import React from 'react';
import dom from 'react-dom';
import { Route, HashRouter, NavLink } from 'react-router-dom';

let Header = () => (
    <div className="navbar navbar-default">
        <div className="navbar-header">
            <NavLink to="/" className="navbar-brand">React Router Example</NavLink>
        </div>
        <ul className="nav navbar-nav navbar-left">
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/contact-us">Contact us</NavLink></li>
        </ul>
    </div>
);

let Products = () => <div><h3>Products page</h3></div>;
let AboutUs = () => <div><h3>About us page</h3></div>;
let ContactUs = () => <div><h3>Contact us page</h3></div>;
let PageNotFound = () => <div><h3 style={{color: 'red'}}>404 - Page not found</h3></div>;
let HomePage = () => (
    <div>
        <h1>This is the homepage!</h1>
        <hr />
    </div>
);

let App = props => (
    <div className="container">
        <Header />
        <div>{props.children}</div>
    </div>
);

let routes = (
    <HashRouter>
        <App>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={Products} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
        </App>
    </HashRouter>
);

dom.render(routes, document.getElementById('app'));