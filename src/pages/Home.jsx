import React from 'react';
import Navbar from '../partials/Navbar';

function Home() {
    return (
        <>
          <Navbar />
          <h1>you are not logged in.</h1>
          <a className ="App-link" href={"/auth/login"}>Login Here</a>
        </>
    );
}

export default Home;
