import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
    return axios({
        method: 'POST',
        url: 'http://localhost:4000/login',
        data: credentials,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(data => data.data)
}

// async function loginUser(credentials) {
//     return {token:'123tk'}
// }

const Login = ({setToken, setType}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        // if (username == '' || password == '') {
        //     alert('All fields must be filled')
        // }

        let formfield = new FormData()

        formfield.append('email', username)
        formfield.append('password', password)

        const token = await loginUser(formfield);
        console.log('The token is '+token)
        console.log(token.token)
        setType('login')
        setToken({token: token.token});
    }

    return (
        <div>
            <div className="log-w3">
                <div className="w3layouts-main">
                    <h2 className="login-title">Sign In Now</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="ggg" name="Email" placeholder="E-MAIL" required="" onChange={e => setUserName(e.target.value)} />
                            <input type="password" className="ggg" name="Password" placeholder="PASSWORD" required="" onChange={e => setPassword(e.target.value)}  />
                            {/* <span><input type="checkbox" />Remember Me</span>
                            <h6><a href="#">Forgot Password?</a></h6> */}
                                <div className="clearfix"></div>
                                <input type="submit" value="Sign In" name="login" />
                        </form>
                        {/* <p>Don't Have an Account ?<a href="registration.html">Create an account</a></p> */}
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;