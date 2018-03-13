import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import { handleLogin, resetErrors } from '../../actions/login_index';
import Logo from '../../img/logo-long.png'

class LoginPage extends Component {

    handleFormSubmit = values => {
        this.props.handleLogin(values)
    }

    render() {
        return (
            <div className='login-page' style={{ minHeight: '100vh' }}>
                {this.props.error ?
                    <div className="page-error">{this.props.error}</div>
                    :
                    null
                }
                {this.props.fetching ?
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        flexFlow: 'column'
                    }}>

                        <br />
                        Welcome Back! Getting your things......
                        </div>
                    :
                    <div className="signup-container" style={{ minHeight: '100vh' }}>
                        <div className="login-sidebar">
                            <div className="login-logo">
                                <img src={Logo} alt="" style={{ width: '85%' }} />
                            </div>
                            <div className="login-title">Dealer Login</div>
                            <div className="login-form-container">
                                <LoginForm onSubmit={this.handleFormSubmit} />
                            </div>
                        </div>
                        {/* <div className="signin-logo">
                            <img src={Logo} alt="" style={{ width: '100%' }} />
                        </div> */}
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.login.error,
        fetching: state.login.fetching
    }
}

export default connect(mapStateToProps, { handleLogin, resetErrors })(LoginPage)