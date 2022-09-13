import React from 'react';
import Navbar from '../partials/Navbar';

function Profile() {
    return (
        <>
          <Navbar />
          <h1>This is the profile</h1>
          <p>you are logged in :)</p>
          <a className="App-link" href={"/auth/logout"}>Logout</a>
        </>
    );
}

export default Profile;
