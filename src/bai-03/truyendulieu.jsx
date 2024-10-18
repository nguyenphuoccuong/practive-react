

const InputField = ({onInputChange}) => {
    const handleChange = (event) => {
        const value = event.target.value;
        onInputChange(value);
    }


  return (
    <input type="text" onChange={handleChange} />
  );
}
export default InputField;