// App.js
import React from 'react';

import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Navbar } from './NavbarAndFooter/Navbar';
import { HomePage } from './HomePage/HomePage';
import { Footer } from './NavbarAndFooter/Footer';
import { BookingPage } from './BookingPage/BookingPage';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import LoginWidget from './auth/LoginWidget';
import { oktaConfig } from "./lib/oktaConfig";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom'; // Import useHistory
import { SignupPage } from './auth/SignupPage';
import { ContactUsPage } from './ContactUsPage/ContactUsPage';
import { Backoffice } from './BackofficePage/BackofficePage';
import { UserPage } from './UserPage/UserPage';
import { AboutusPage } from './AboutusPage/AboutusPage';


const oktaAuth = new OktaAuth(oktaConfig);
export const App=()=> {
  const history = useHistory();
  const customAuthHandler = () => {
    history.push("/login");
  };


  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };


  return (
    
    <div className="main-content" style={{ paddingBottom: "60px" }}>
    
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >

        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <SecureRoute path="/courtBooking">
          <BookingPage />
          </SecureRoute>
          {/* <Route path="/page">
            <div>Page</div>
          </Route> */}
          <Route path="/about">
            <AboutusPage/>
          </Route>
          <Route path="/contact">
            <ContactUsPage/>
          </Route>
          <SecureRoute path="/backoffice"
          >
            <Backoffice/>
          </SecureRoute>
          <SecureRoute path="/backoffice/:action">
            <Backoffice />
          </SecureRoute>
          <SecureRoute path="/user/:action">
            <UserPage />
          </SecureRoute>
    
          <Route
            path="/login"
            render={() => <LoginWidget config={oktaConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />
        </Switch>
        <Footer />

      </Security>
    
    </div>
    
  );
}

