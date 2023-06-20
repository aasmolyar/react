import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import UserPhoto from './DialogItem/UserPhoto';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
    let UserPhotoElements = props.state.photo.map((photo) => <UserPhoto photo={photo.photo} id={photo.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let textMessage = newMessageElement.current.value;
        alert(textMessage);
    }

    return (
        <div className={s.dialogs}>

            <div className=''>
                {UserPhotoElements}
            </div>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textArea ref = {newMessageElement}></textArea>
            </div>

            <div>
                <button onClick = {addMessage}>Sent message</button>
            </div>
        </div>
    )
}

export default Dialogs;
