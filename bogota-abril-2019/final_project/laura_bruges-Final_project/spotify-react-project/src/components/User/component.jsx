import React from 'react';
import Container from '../PageStructure/Container';

class User extends React.Component {
    render() {
        return (
            <Container>
                <h2>Welcome {this.props.user.display_name}!</h2>
                <br></br>
                <h3>Country: {this.props.user.country}</h3>
                <br></br>
                <h3>Membership: {this.props.user.product}</h3>
            </Container>
        );
    }
}

export default User;