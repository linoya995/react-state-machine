import "../style/button.scss";

// Button props
interface ButtomProps {
  onClick: () => void;
  title: string;
}

/**
 * Button with custom title.
 */
const Button = (props: ButtomProps) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
