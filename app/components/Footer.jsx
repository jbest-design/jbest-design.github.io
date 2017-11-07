import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="black-band">
                    <div className="so-long">Let's make something beautiful.</div>
                </div>
                <footer>© {new Date().getFullYear()} - Jordan Best. All rights reserved.</footer>
            </div>
        );
    }
}

export default Footer;