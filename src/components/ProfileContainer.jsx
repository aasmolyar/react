import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from '../components/redux/profile-reducer';
import withRouter from "../components/common/withRouter";

class ProfileContainer extends React.Component {

componentDidMount () { 
  let userId = this.props.params.userId;
  console.log('this.props', this.props.params);
  if (!userId) {
    userId = 2;
  }
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
  .then(responce => {
      this.props.setUserProfile(responce.data);
  });    
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

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
