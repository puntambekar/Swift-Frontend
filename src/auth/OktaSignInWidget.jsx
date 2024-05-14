import { oktaConfig } from "../lib/oktaConfig";
import { useEffect, useRef, useState } from "react";
import OktaSignIn, { OktaSignInAPI } from "@okta/okta-signin-widget";
//import './../../node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import "./custom-okta-sign-in.css";
import { SignupPage } from "./SignupPage";
import { useHistory } from "react-router-dom";

const OktaSignInWidget = ({ onSuccess, onError }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(true);

  const history = useHistory();

  const widget = new OktaSignIn(oktaConfig);
  const widgetRef = useRef();

  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  const openSignupModal = () => {
    setShowSignupModal(true);
  };
  const closeSignupModal = () => {
    setShowSignupModal(false);
  };
  const closeSigninModal = () => {
    setShowSigninModal(false);
    history.push("/home");
  };
  return (
    <>
      {showSigninModal && (
        <>
          <div className="modal-overlay"></div>
          <div
            className={`modal show`}
            style={{ display: "block" }}
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">Sign in</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeSigninModal}
                    ></button>
                  </div>

                  <div ref={widgetRef}></div>
                  <div className="d-flex justify-content-center mt-3">
                    <hr />

                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      onClick={openSignupModal}
                    >
                      Create new account
                    </button>
                  </div>

                  {showSignupModal && (
                    <SignupPage closeSignupModal={closeSignupModal} />
                  )}

                  {/* <div className="modal-footer">
                <button type="button" className="btn btn-success">
                  Sign Up
                </button>
              </div> */}
                </>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OktaSignInWidget;
