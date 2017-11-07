import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import Root from './components/Root.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './pages/Portfolio.jsx';



function renderApp() {
    ReactDOM.render(
        <Router>
            <Root>
                <Header selected="about" />
                <Route path="/index.html"   component={HomePage} />
                <Route path="/"             component={HomePage} exact={true} />
                <Route path="/portfolio"    component={Portfolio} />
                <Footer />
            </Root>
        </Router>,
        document.getElementById('app')
    );
}

renderApp();