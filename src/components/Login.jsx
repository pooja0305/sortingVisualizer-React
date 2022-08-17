import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './CustomModel.css';
const clientId =
  '676525979138-g108037ku5ckvrqmcrh6b1o3u0rn1ua2.apps.googleusercontent.com';
//   '676525979138-tcl2hfjevi4so9i9qahvbno8qg58qt6r.apps.googleusercontent.com';

const Login = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
    props.start(props.algoNumber, props.arr);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
    props.start(0, []);
  };

  const onSignOutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <div>
      <div>
        {showLoginButton && (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        )}
      </div>
      <div>
        {showLogoutButton && (
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignOutSuccess}
          ></GoogleLogout>
        )}
      </div>
    </div>
  );
};

export default Login;
//Project ID: sortingvisualizer-react. It cannot be changed later.
//client secret: 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
//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
