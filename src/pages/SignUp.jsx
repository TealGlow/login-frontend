import React from 'react';
import Navbar from '../partials/Navbar';
import SignUpForm from '../partials/SignUpForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';


function SignUp() {
    return (
        <>
          <Navbar />
          <SignUpForm />
        </>
    );
}

export default SignUp;
