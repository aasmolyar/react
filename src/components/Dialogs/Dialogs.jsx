import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={`${s.dialog} ${s.active}`}>
                    Dusha
                </div>
                <div className={s.dialog}>
                    Den
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Alena
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How</div>
                <div className={s.message}>Why</div>
            </div>
        </div>
    )
}

export default Dialogs;
