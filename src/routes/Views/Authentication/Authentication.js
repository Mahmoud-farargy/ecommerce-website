import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { toastify } from "../../../utilities/utilities";
import "./Authentication.scss";
import { useParams, useHistory } from "react-router-dom";

const Authentication = ({ changeCurrentPage }) => {
  const { authType } = useParams();
  const history = useHistory();
  // states
  const [loginState, setLoginState] = useState({
    userEmail: "",
    password: "",
    rememberMe: false,
  });
  const [regState, setRegState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [authTitle, setAuthTitle] = useState("login");

  //end of states
  useEffect(() => {
    const pageTitle = authType === "login" ? "Login" : "Sign Up";
    setAuthTitle(pageTitle);
    changeCurrentPage(pageTitle);
  }, [changeCurrentPage, authType]);
  const changeInput = (e, isLogin) => {
    const target = e.target;
    const name = target.name;
    const val =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
    if (typeof val !== undefined && name) {
      if (isLogin) {
        setLoginState({
          ...loginState,
          [name]: val,
        });
      } else {
        setRegState({
          ...regState,
          [name]: val,
        });
      }
    }
  };
  const onSubmission = (e) => {
    e.preventDefault();
    if (authType.toLowerCase() === "login") {
      Object.values(loginState).every((val) => val !== "" && val !== undefined)
        ? toastify({ msg: "Fake logged in!", type: "success" })
        : toastify({
            msg: "Please fill all input fields above.",
            type: "Fail",
          });
    } else if (authType.toLowerCase() === "signup") {
      Object.values(regState).every((val) => val !== "" && val !== undefined)
        ? toastify({ msg: "Fake signed up!", type: "success" })
        : toastify({
            msg: "Please fill all input fields above.",
            type: "Fail",
          });
    }
  };

  return (
    <Fragment>
      <div id="auth" className="flex-column">
        <div className="auth--inner">
          <div className="auth--header">
            <h2>{authTitle}</h2>
            <p className="auth--directions">
              {authType.toLowerCase() === "login"
                ? "Enter Login details to get access"
                : "Create your account to get full access"}
            </p>
          </div>
          <div className="login--reg--inner">
            <form onSubmit={(e) => onSubmission(e)}>
              {/* LOGIN */}
              {authType.toLowerCase() === "login" ? (
                <>
                  <div className="form-group">
                    <label htmlFor="userEmail">Username Or Email Address</label>
                    <input
                      autoFocus
                      required
                      type="text"
                      id="userEmail"
                      value={loginState.userEmail}
                      onChange={(e) => changeInput(e, true)}
                      placeholder="Username / Email address"
                      name="userEmail"
                    />
                  </div>

                  <div className="form-group">
                    <label required htmlFor="loginPassword">
                      Password
                    </label>
                    <input
                      autoComplete="off"
                      type="password"
                      id="loginPassword"
                      value={loginState.password}
                      onChange={(e) => changeInput(e, true)}
                      placeholder="Password"
                      name="password"
                    />
                  </div>

                  <div className="remember--me flex-row">
                    <span className="flex-row">
                      <input
                        id="rememberMe"
                        value={loginState.rememberMe}
                        onChange={(e) => changeInput(e, true)}
                        type="checkbox"
                        name="rememberMe"
                      />
                      <label htmlFor="rememberMe">Keep Me Logged In</label>
                    </span>
                    <span>Forgot Password?</span>
                  </div>

                  <div className="auth--footer flex-row">
                    <span>
                      Don’t have an account?{" "}
                      <span
                        onClick={() => history.push("/auth/signup")}
                        className="auth--switch--btn"
                      >
                        Sign Up
                      </span>{" "}
                      here
                    </span>
                    <button className="auth--submit--btn" type="submit">
                      {authTitle}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      autoFocus
                      required
                      type="text"
                      id="fullName"
                      value={regState.fullName}
                      onChange={(e) => changeInput(e, false)}
                      placeholder="Enter full name"
                      name="fullName"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      autoFocus
                      required
                      type="text"
                      id="email"
                      value={regState.email}
                      onChange={(e) => changeInput(e, false)}
                      placeholder="Enter email address"
                      name="email"
                    />
                  </div>

                  <div className="form-group">
                    <label required htmlFor="signUpPassword">
                      Password
                    </label>
                    <input
                      type="password"
                      id="signUpPassword"
                      value={regState.password}
                      onChange={(e) => changeInput(e, false)}
                      placeholder="Password"
                      name="password"
                    />
                  </div>

                  <div className="form-group">
                    <label required htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      autoComplete="off"
                      type="password"
                      id="confirmPassword"
                      value={regState.confirmPass}
                      onChange={(e) => changeInput(e, false)}
                      placeholder="Password"
                      name="confirmPass"
                    />
                  </div>

                  <div className="auth--footer flex-row">
                    <span>
                      Already have an account?{" "}
                      <span
                        onClick={() => history.push("/auth/login")}
                        className="auth--switch--btn"
                      >
                        Login
                      </span>{" "}
                      here
                    </span>
                    <button className="auth--submit--btn" type="submit">
                      {authTitle}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentPage: (title) => dispatch({ type: "changePageTitle", title }),
  };
};
export default connect(null, mapDispatchToProps)(Authentication);
