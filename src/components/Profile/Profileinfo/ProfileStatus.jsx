import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: !this.props.status,
    }

    activateAditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateAditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
    }
        console.log('asdfasdfasdfasdf')
    }

    render () {
        return (
            <div>
                {!this.state.editMode &&  
                    <div>
                        <span onClick={this.activateAditMode}> {this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateAditMode}
                            value={this.state.status}></input>
                    </div>
                }
            </div>
          )
    }
}

export default ProfileStatus
