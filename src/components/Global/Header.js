import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/header.css';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    };

  render() {
      // podemos usarlo de la siguiente manera
      const { title, items } = this.props;
      // o
      /*
      const title = this.props.title;
      const items = this.props.items;
      */

      // por medio de la variable this.props podemos obtener las variables y los valores de nuestro propTypes
      console.log(this.props)
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>

           <ul className="Menu">
               {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
           </ul>
        </div>
      </div>
    );
  }
}

export default Header;
