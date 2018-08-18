import React from 'react';
import { withRouter } from 'react-router-dom';
import { firebase, db } from '../firebase';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        userId: '',
        userName:''
      }
    }

    componentDidMount() {
      this.fireBaseListener = firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push("/login");
        }
        else{

          this.setState({
            userId: authUser.uid
          })
          db.getUserInfo(authUser.uid).then(value =>
            this.setState({
              userName: value.val().name
            })
          );

        }
      });
    }

    componentWillUnmount() {
       this.fireBaseListener();
    }

    render() {
      return (
        <Component authUserId={this.state.userId} authUserName={this.state.userName}/>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;
