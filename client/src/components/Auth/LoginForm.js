import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import User from '../../img/user.svg'
import Lock from '../../img/locked.svg'
import Next from '../../img/next.svg'


const validate = values => {
    const errors = {}
    if (!values.first_name) {
        if (!values.email) {
            errors.email = '* Please enter an email address'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = '* Invalid email address'
        }
        if (!values.password) {
            errors.password = '* Please enter a password'
        }
        return errors
    }
}

const warn = values => {
    const warnings = {}
    return warnings
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div className="form-group">
            <label className='login-label'>{label}</label>
            <input {...input} type={type} className='login-form-field' />
            {touched &&
                ((error && <span className="form-error">{error}</span>) ||
                    (warning && <span className="form-warning">{warning}</span>))}
        </div>
    )


const SignupForm = props => {
    const { handleSubmit, submitting } = props
    return (
        <div className='login'>
            <div className="signin-form">
                <form onSubmit={handleSubmit} className="login-form">

                    <Field name="email" type="email" component={renderField} label={<img src={User} style={{ height: '40px' }} alt="user"/>} />
                    <hr className="form-divider" />
                    <Field name="password" type="password" component={renderField} label={<img src={Lock} style={{ height: '40px' }}  alt="lock"/>} />
                    <div style={{ width: '100%', marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" className="login-form-button" disabled={submitting}>
                            <span>Login</span>
                            <img src={Next} style={{ height: '20px', position: 'relative', left: '50px' }} alt="next"/>
                        </button>
                    </div>
                </form>
            </div>
            <Link to='/signup' className="register-link"> Need help logging in? Click Here</Link>
        </div>
    )
}

export default reduxForm({
    form: 'LoginForm',
    validate,
    warn
})(SignupForm)
