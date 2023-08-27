import "../style/input.scss";

// Input props
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  value: string;
}

/**
 * Input text field.
 */
const Input = (props: InputProps) => {
  return (
    <input
      className="input"
      type="text"
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
