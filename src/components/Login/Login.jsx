import React from "react";
import { reduxForm, Field } from 'redux-form';
import { Input } from "../common/FormsControls/formsControls";
import { required } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login} from '../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControls/formControls.module.css';

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

             <div>
                <Field placeholder={'Email'} name={'email'}
                        validate={[required, ]}
                        component={Input}/>
            </div>

            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required, ]}
                       component={Input}/>
            </div>
            
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>

            { error && <div className={style.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.passsword, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
