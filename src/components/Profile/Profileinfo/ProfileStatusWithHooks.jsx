import React from 'react';
import {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status] );

    const activateAditMode = () => {
        setEditMode(true);
    };

    const deActivateAditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.Value);
    };

        return (
            <div>
                { !editMode &&
                    <div>
                        <span onClick={activateAditMode}> {props.status || '-----ghjghjghj'}</span>
                    </div>
                }
                { editMode && 
                    <div>
                        <input autoFocus={true}
                               onBlur={deActivateAditMode}
                               onChange={onStatusChange}
                               value={status}
                        ></input>
                    </div>
                }
            </div>
    )
}

export default ProfileStatusWithHooks
