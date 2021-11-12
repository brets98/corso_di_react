import PropTypes from "prop-types";
// library that make you do a check on the props type that has been passed

const Header = ({ title }) => {
  // i just destructurated the props in order to have a cleaner code
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// this is the method to have a default props
Header.defaultProps = {
  title: "ciao mamma guarda come mi diverto",
};

// this is the method that permit to do a type check on the prorps that has been passed,
// it will render anyway but it will generate a warning on the console
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
