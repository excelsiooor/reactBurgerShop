import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    return (
    <div className='login-container'>
        <nav className='login'>
            <h2>Authorization</h2>
            <p>Use your Github</p>
            <button className='github'
            onClick={() => props.authenticate()}>
            Sign in
            </button>
        </nav>
    </div>
    );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;