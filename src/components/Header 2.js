import React from 'react';

// stateless functional component
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </header>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;

/*
// class based component
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
*/