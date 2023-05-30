import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1'>Dusha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Den</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Olya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Alena</NavLink>
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
