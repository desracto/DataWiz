import "./forminputs.css";

const FormInputs = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="FormInputs">
      <label>{label}</label> <br />
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInputs;
