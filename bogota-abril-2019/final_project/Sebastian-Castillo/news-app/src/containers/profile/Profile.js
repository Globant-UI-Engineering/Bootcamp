import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../store/actions/actionDataUser';
import Bookmarks from '../../components/bookmark/Bookmarks';
import SkeletonProfile from '../../components/skeleton-profile/SkeletonProfile';

import './Profile.css';

class Profile extends React.Component {
  reloadData = () => {
    const { getUserFunction } = this.props;
    getUserFunction();
  };

  componentDidMount() {
    this.reloadData();
  }

  renderProfile = (user, isFetchingUser) => {
    if (isFetchingUser) {
      return <SkeletonProfile />;
    } else {
      if (user) {
        return (
          <section className="Profile__info">
            <figure className="Profile__image">
              <img src={user.picture} alt="profile-img" />
            </figure>
            <h2 className="Profile__info_name">{`${user.name} ${
              user.lastname
            }`}</h2>
            <div className="Profile__info_detail">
              <label>Age: </label>
              <span>{user.age}</span> <br />
              <label>Email: </label>
              <span>{user.email}</span> <br />
              <label>Username: </label>
              <span>{user.username}</span> <br />
              <label>Phone: </label>
              <span>{user.phone}</span> <br />
              <label>Cell: </label>
              <span>{user.cell}</span> <br />
              <label>City: </label>
              <span>{user.location}</span> <br />
            </div>
          </section>
        );
      }
    }
  };

  render() {
    const { user, isFetchingUser, error } = this.props;
    return (
      <div className="Profile">
        {error ? <SkeletonProfile /> : this.renderProfile(user, isFetchingUser)}
        <Bookmarks />
      </div>
    );
  }
}

function mapStateToprops(state, props) {
  return {
    user: state.dataUser.user,
    isFetchingUser: state.dataUser.isFetchingUser,
    error: state.dataUser.errorUser,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUserFunction: () => dispatch(getUser()),
});

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Profile);
