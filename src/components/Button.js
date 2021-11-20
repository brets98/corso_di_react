import PropTypes from "prop-types";

const Button = ({ color, text, onclick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onclick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
};
export default Button;
