import Header1 from "../components/Header1";
import "./SignUpPage.css";
import FormInputs from "../components/FormInputs";
import { useState } from "react";

function SignUpPage() {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    accounttype: "",
    gender: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "Username",
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "username@gmail.com",
      label: "Email",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "accounttype",
      type: "radio",
      options: [
        { id: "learner", label: "Learner" },
        { id: "instructor", label: "Instructor" },
      ],
      label: "Account Type",
    },
    {
      id: 6,
      name: "gender",
      type: "radio",
      options: [
        { id: "male", label: "Male" },
        { id: "female", label: "Female" },
      ],
      label: "Gender",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <>
      <Header1 />
      <div className="container">
        <form className="signup_form">
          <h2>
            Welcome to <b>Data</b>Wiz
          </h2>
          <h1>Sign Up</h1>
          {inputs.map((input) => (
            <div key={input.id} className="form-input">
              {input.type === "radio" ? (
                <div className="checkbox-options">
                  <label className="checkbox-label">{input.label}</label>
                  <div className="radio-buttons">
                    {input.options.map((option) => (
                      <>
                        <input
                          type="radio"
                          name={input.name}
                          value={option.id}
                          onChange={onChange}
                          checked={values[input.name] === option.id}
                        />
                        <label key={option.id} className="radio-button-label">
                          {option.label}
                        </label>
                      </>
                    ))}
                  </div>
                </div>
              ) : (
                <FormInputs
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              )}
            </div>
          ))}
          <button>Sign in </button>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
