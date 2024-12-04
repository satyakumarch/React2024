import React, { useState } from "react";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email format" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    if (name === "password") {
      setPassword(value);
      if (value.length < 8) {
        setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 8 characters" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }

    setSubmitDisabled(
      !validateEmail(email) || password.length < 8 || !!errors.email || !!errors.password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", paddingTop: "50px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Enter your Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            style={{ display: "block", width: "100%", padding: "8px", margin: "10px 0" }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label> Enter your Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            style={{ display: "block", width: "100%", padding: "8px", margin: "10px 0" }}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>
        <button
          type="submit"
          disabled={isSubmitDisabled}
          style={{
            background: isSubmitDisabled ? "gray" : "blue",
            color: "white",
            padding: "10px 20px",
            cursor: isSubmitDisabled ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
