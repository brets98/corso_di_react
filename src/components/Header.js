import PropTypes from "prop-types";
import Button from "./Button";
import AddTask from "./AddTask";
import { useState } from "react";
// library that make you do a check on the props type that has been passed

const Header = ({ title, onAdd }) => {
  const [show, setShow] = useState(false);

  // i just destructurated the props in order to have a cleaner code

  return (
    <header>
      <h1 className="left">{title}</h1>
      <Button
        className="left"
        color={show ? "red" : "green"}
        text={show ? "Hide" : "Show"}
        onclick={() => setShow(!show)}
      ></Button>

      {show && <AddTask onAdd={onAdd} />}
    </header>
  );
};

// this is the method to have a default props
Header.defaultProps = {
  title: "ciao mamma guarda come mi diverto",
};

// this is the method that permit to do a type check on the prorps that has been passed,
// it will render anyway but it will generate a warning on the console
// and also set it as a required props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
