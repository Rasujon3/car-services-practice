import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const agree = event.target.terms.checked;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label className={agree ? "ps-2" : "ps-2 text-danger"} htmlFor="terms"> */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genious Car Terms & Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-primary pe-auto text-decoration-none">
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
