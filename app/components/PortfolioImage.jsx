import React, {Component} from 'react';

class PortfolioImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url : props.url,
            title : props.title,
            alt : props.alt
        };
    }

    render() {
        return (
            <li>
                <a href={this.state.url.large} title={this.state.title}>
                    <img src={this.state.url.small} alt={this.state.alt} />
                </a>
            </li>
        );
    }
}

export default PortfolioImage;