import React, { Component } from  'react';

class Root extends Component {
    render() {
        return (
            <div {...this.props} />    
        );
    }
}

export default Root;