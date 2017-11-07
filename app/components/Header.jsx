import React, { Component } from  'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected : props.selected
        }
    }

    render() {
        return (
            <div className="nav ochre-band">
                <div className="main-container">
                    <div className="logo">
                            <div className="logo-name"><Link to="/">Jordan<br />Best </Link></div>
                            <div className="logo-tagline">creative design solutions</div>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li className={this.state.selected == "about" ? "selected" : ""}><a href="/#about">About</a></li>
                            <li className={this.state.selected == "services" ? "selected" : ""}><Link to="/#services">Services</Link></li>
                            <li className={this.state.selected == "portfolio" ? "selected" : ""}><Link to={`/portfolio`}>Portfolio</Link></li>
                            <li className={this.state.selected == "contact" ? "selected" : ""}><a href="/#about">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>       
        );
    }
}

export default Header;