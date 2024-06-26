import { useState } from 'react';
import { Route, Routes} from "react-router-dom";

import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';

import '@aws-amplify/ui-react/styles.css';

import SiteHeader from "./components/common/SiteHeader";
import SiteNav from './components/common/SiteNav';


import HomePage from './components/home/HomePage';
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import ThankYou from "./components/home/ThankYou";
import Decline from "./components/home/Decline";
import CreateEvent from "./components/home/CreateEvent";
import GetEvent from "./components/home/GetEvent";


Amplify.configure(awsExports);

function App() {
  return (
     <Authenticator loginMechanism={["email"]}>
    {({ signOut, user}) => (
          <div className="parent">
            <div className="top" >
              <SiteHeader />
            </div>
            <div className="wrapper">
              <div className="side">
                <SiteNav logOut={signOut}/>
              </div>
            </div>
            <div className="content">
                <Routes>
                  <Route path="*" element={<HomePage />} />
                  <Route path="/" exact={true} element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/accept" element={<ThankYou />} />
                  <Route path="/decline" element={<Decline />} />
                  <Route path="/create-event" element={<CreateEvent />} />
                  <Route path="/events" element={<GetEvent />} />
                </Routes>
            </div>
          </div>
    )}
    </Authenticator>

  );
}

export default App;
