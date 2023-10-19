import React from 'react';
import s from './Profileinfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateAditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateAditMode() {
        this.setState({
            editMode: false
        })
    }

    render () {
        return (
            <div>
                {!this.state.editMode &&  
                    <div>
                        <span onClick={this.activateAditMode.bind(this)}> {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateAditMode.bind(this)}
                            value={this.props.status}></input>
                    </div>
                }
            </div>
          )
    }
}

export default ProfileStatus
