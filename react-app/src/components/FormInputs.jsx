import { useState } from "react";
import "./forminputs.css";

const FormInputs = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="FormInputs">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className = "ErrorMessage">{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
