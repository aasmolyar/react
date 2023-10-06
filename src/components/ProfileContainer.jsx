import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUserProfile} from '../components/redux/profile-reducer';
import withRouter from "../components/common/withRouter";
class ProfileContainer extends React.Component {

componentDidMount () { 
  let userId = this.props.params.userId;
  console.log('this.props', this.props.params);
  if (!userId) {
    userId = 2;
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
