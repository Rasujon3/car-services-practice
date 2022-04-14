import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="checkbox" name="terms" id="terms" />
        {/* <label className={agree ? "ps-2" : "ps-2 text-danger"} htmlFor="terms"> */}
        <label htmlFor="terms">Accept Genious Car Terms & Condition</label>
        <input
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
    </div>
  );
};

export default Register;
