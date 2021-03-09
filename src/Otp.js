import React from 'react'
import { useEffect } from 'react';
import * as firebaseui from "firebaseui";
import firebaseConfig from './firebase'
import firebase from 'firebase'

function Otp() {

    useEffect(() => {
        const fbase = firebase.initializeApp(firebaseConfig);
        const uiConfig = {
          signInSuccessUrl: "http://localhost:3000/dashboard", //This URL is used to return to that page when we got success response for phone authentication.
          signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
          tosUrl: "http://localhost:3000/"
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);
      })
    return (
        <div id="firebaseui-auth-container"></div>
    
    )
}

export default Otp
