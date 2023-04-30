import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Login.scss";
import Logo from "../../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import GoogleLogo from "../../assets/social-icons/google-icon.svg";
import checkValidEmail from "../../utils/checkValidEmail";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [passShow, setPassShow] = useState(false);

  const emailCheck = (email) => {
    const isValid = checkValidEmail(email);
    if (email === "") {
      setEmailError("Email address is required");
    } else if (!isValid) {
      setEmailError("Not a valid email");
    } else {
      setEmailError("");
    }
  };

  const passEmptyCheck = (password) => {
    if (password === "") {
      setPassError("Password is required");
    } else if (password.length < 6 && password.length !== 0) {
      setPassError("Please Enter minimum 6 characters");
    } else {
      setPassError("");
    }
  };

  const handleEmailChange = (e) => {
    emailCheck(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePassChange = (e) => {
    passEmptyCheck(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  };

  const handlePassShow = () => {
    setPassShow(!passShow);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    emailCheck(email);
    passEmptyCheck(password);

    if (!emailError && !passError && email && password) {
      console.log(formData);
    }
  };

  return (
    <>
      <section className="max-w-[1280px] mx-auto h-screen flex items-center justify-center ">
        <div className="login-container space-y-6">
          <div>
            <Link to={"/"} className="flex items-center">
              <IoIosArrowBack className="font-bold text-lg mb-1"></IoIosArrowBack>
              <p>Back</p>
            </Link>
          </div>
          <div className="logo-wrapper">
            <img src={Logo} alt="" />
          </div>
          <div>
            <h2 className="login-title">Login</h2>
          </div>
          <div className="login-input-area space-y-5">
            <div className="form-container">
              <form action="" className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    className="input-field"
                    onChange={(e) => handleEmailChange(e)}
                  />
                  {emailError && <p className="input-error">{emailError}</p>}
                </div>
                <div>
                  <div className="password-field">
                    <input
                      type={passShow ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      id="password"
                      className="input-field input-pass-field"
                      onChange={(e) => handlePassChange(e)}
                    />
                    <div
                      className="password-show-item"
                      onClick={handlePassShow}
                    >
                      {passShow ? (
                        <FaRegEye></FaRegEye>
                      ) : (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      )}
                    </div>
                  </div>
                  {passError && <p className="input-error">{passError}</p>}
                </div>
                <div>
                  <input
                    type="submit"
                    value={"Login"}
                    name=""
                    id="login-btn"
                    className="submit-btn"
                  />
                </div>
              </form>
            </div>
            <div>
              <Link to={"/"} className="forgot-pass-text">
                Forgot Password
              </Link>
            </div>
            <div>
              <p className="register-text">
                New to Prothom Alo?{" "}
                <Link to={"/registration"} className="register-link">
                  Create an account
                </Link>
              </p>
            </div>
            <div>
              <p className="text-center">or</p>
            </div>
            <div className="google-login space-x-4">
              <img src={GoogleLogo} alt="" className="google-logo" />
              <p className="google-logo-text">Continue with Google</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
