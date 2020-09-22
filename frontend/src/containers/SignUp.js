import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';

const SignUp = ({ setAlert, signup, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'error');
        } else {
            signup({email, password, password2, name});
        }
    };
    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="auth">
            <h1 className="auth__title">Sign Up</h1>
            <p className="auth__lead">Create your Account</p>
            <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
                <div className="auth__form__group">
                    <input
                        className="auth__form__input"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>

                <div className="auth__form__group">
                    <input
                        className="auth__form__input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="auth__form__group">
                    <input
                        className="auth__form__input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => onChange(e)}
                        required
                        minLength="6"
                    />
                </div>
                <div className="auth__form__group">
                    <input
                        className="auth__form__input"
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        onChange={(e) => onChange(e)}
                        required
                        minLength="6"
                    />
                </div>

                <button className="auth__form__button">Register</button>
            </form>
            <p className="auth__authtext">
                Aleready have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
};

SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup, setAlert })(SignUp);
