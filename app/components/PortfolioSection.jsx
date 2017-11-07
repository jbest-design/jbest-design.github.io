import React, {Component} from 'react';

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            title: props.title
        }
    }

    render() {
        return (
            <div>
                <h2>
                    <a name={this.state.name} id={this.state.name}>{this.state.title}</a>
                </h2>
                <div className="thumbnails">
                    <ul className="clearFix" {...this.props}>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default PortfolioSection;