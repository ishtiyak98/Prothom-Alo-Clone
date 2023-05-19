import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import GoogleLogo from "../../assets/social-icons/google-icon.svg";
import checkValidEmail from "../../utils/checkValidEmail";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../redux/user/userApi";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CustomModal from "../../components/CustomModal/CustomModal";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [register, { isSuccess }] = useRegisterMutation();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error || errorGoogle) {
      console.log(error || errorGoogle);
    } else if (user || userGoogle) {
      console.log("user:", user || userGoogle);
      register({ name: formData.name, email: formData.email, role: "user" });
    }
  }, [user, formData, register, error, errorGoogle, userGoogle]);

  //!----------- Form Validation Start -----------
  const nameCheck = (name) => {
    if (name === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

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

  const passCheck = (password) => {
    if (password === "") {
      setPassError("Password is required");
    } else if (password.length < 6 && password.length !== 0) {
      setPassError("Please Enter minimum 6 characters");
    } else {
      setPassError("");
    }
  };

  const confirmPassCheck = (confirmPass) => {
    if (confirmPass === "") {
      setConfirmPassError("Confirm Password is required");
    } else if (confirmPass.length < 6 && confirmPass.length !== 0) {
      setConfirmPassError("Please Enter minimum 6 characters");
    } else if (confirmPass !== formData.password) {
      setConfirmPassError("Password & Confirm Password doesn't match");
    } else {
      setConfirmPassError("");
    }
  };
  //!----------- Form Validation End-----------

  //!----------- Handle Form Input Data Start -----------
  const handleNameChange = (e) => {
    nameCheck(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    emailCheck(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePassChange = (e) => {
    passCheck(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  };

  const handleConfirmPassChange = (e) => {
    confirmPassCheck(e.target.value);
    setFormData({ ...formData, confirmPass: e.target.value });
  };
  //!----------- Handle Form Input Data End -----------

  const handlePassShow = () => {
    setPassShow(!passShow);
  };
  const handleConfirmPassShow = () => {
    setConfirmPassShow(!confirmPassShow);
  };

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;
    const confirmPass = formData.confirmPass;

    nameCheck(name);
    emailCheck(email);
    passCheck(password);
    confirmPassCheck(confirmPass);

    if (
      !emailError &&
      !passError &&
      !nameError &&
      !confirmPassError &&
      name &&
      email &&
      password
    ) {
      console.log(formData);
      await createUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      <section className="max-w-[1280px] mx-auto h-screen flex items-center justify-center ">
        <div className="login-container space-y-6">
          {(loading || loadingGoogle) && <LoadingSpinner></LoadingSpinner>}
          {(user || userGoogle) && (
            <CustomModal
              mode={"success"}
              heading={"Registration Complete"}
              text={"Your Registration has been completed successfully!"}
            ></CustomModal>
          )}
          {(error || errorGoogle) && (
            <CustomModal
              mode={"error"}
              heading={"Registration Failed"}
              text={`${error || errorGoogle}`}
            ></CustomModal>
          )}
          <div className="inline-block">
            <Link to={"/"} className="flex items-center">
              <IoIosArrowBack className="font-bold text-lg mb-1"></IoIosArrowBack>
              <p>Back</p>
            </Link>
          </div>
          <div className="logo-wrapper">
            <img src={Logo} alt="" />
          </div>
          <div>
            <h2 className="login-title">Registration</h2>
          </div>
          <div className="login-input-area space-y-5">
            <div className="form-container">
              <form action="" className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    className="input-field"
                    onChange={(e) => handleNameChange(e)}
                  />
                  {nameError && <p className="input-error">{nameError}</p>}
                </div>
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
                  <div className="password-field">
                    <input
                      type={confirmPassShow ? "text" : "password"}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="input-field input-pass-field"
                      onChange={(e) => handleConfirmPassChange(e)}
                    />
                    <div
                      className="password-show-item"
                      onClick={handleConfirmPassShow}
                    >
                      {confirmPassShow ? (
                        <FaRegEye></FaRegEye>
                      ) : (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      )}
                    </div>
                  </div>
                  {confirmPassError && (
                    <p className="input-error">{confirmPassError}</p>
                  )}
                </div>
                <div>
                  <input
                    type="submit"
                    value={"Register"}
                    name=""
                    id="login-btn"
                    className="submit-btn"
                  />
                </div>
              </form>
            </div>
            <div>
              <p className="register-text">
                Already a member?{" "}
                <Link to={"/login"} className="register-link">
                  Login
                </Link>
              </p>
            </div>
            <div>
              <p className="text-center">or</p>
            </div>
            <div className="google-login space-x-4" onClick={handleGoogleLogin}>
              <img src={GoogleLogo} alt="" className="google-logo" />
              <p className="google-logo-text">Continue with Google</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
