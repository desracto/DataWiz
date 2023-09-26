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
      errorMessage:
        "Full name must contain only letters and spaces. It should start with a letter and may include spaces for multiple names (e.g., first name, middle name). Special characters, numbers, or punctuation are not allowed.",
      label: "Full Name",
      pattern: "^[A-Za-z]+(?: [A-Za-z]+)*$",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username must be between 6 and 20 characters ,include at least one uppercase letter,I one numeric digit, one special character (underscore or hyphen).",
      label: "Username",
      pattern: "^(?=.*[A-Z])(?=.*\d)(?=.*[-_])[A-Za-z\d-_]{6,20}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "username@gmail.com",
      errorMessage:
        "Please enter a valid email address. For example: username@gmail.com",
      label: "Email",
      pattern: "^(?i)[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must be between 8 and 64 characters in length and contain at least one special character (!@#$%^&*()_+{}[]:;<>,.?~/|).",
      label: "Password",
      pattern:
        "^(?=.*[!@#$%^&*()_+{}[]:;<>,.?~\\/|])[A-Za-zd!@#$%^&*()_+{}[]:;<>,.?~\\/|]{8,64}$",
      required: true,
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
    </>
  );
}

export default SignUpPage;
