import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/formsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AdddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength50]}
                       name='newMessageBody' 
                       placeholder='enter your message' />
            </div>
             <div>
                 <button>send</button>
             </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAdddMessageForm'})(AdddMessageForm)

export default Dialogs;
