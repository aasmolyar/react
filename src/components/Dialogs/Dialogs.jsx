import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dusha'},
        {id: 2, name: 'Den'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How'},
    ]

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map((m) => <Message message={m.message} />) 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
