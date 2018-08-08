import React from 'react';

class Archives extends React.Component {

    render() {
        console.log(this.props);
        // console.log(this.props.match.params.article);
        return (
            <div>
                <h1>Archives</h1>
            </div>
        );
    }
}

export default Archives;