import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUserProfile} from '../components/redux/profile-reducer';
import withRouter from "../components/common/withRouter";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

componentDidMount () { 
  let userId = this.props.params.userId;
  if (!userId) {
    userId = 7;
  }
  this.props.getUserProfile(userId);
}

  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
