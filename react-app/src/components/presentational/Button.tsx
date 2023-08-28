import "../style/button.scss";

// Button props
interface ButtomProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}

/**
 * Button with custom title.
 */
const Button = (props: ButtomProps) => {
  return (
    <button
      className="button"
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
