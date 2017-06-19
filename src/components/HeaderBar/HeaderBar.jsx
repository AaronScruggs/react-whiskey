import React from 'react';
import styles from './HeaderBar.css';


class HeaderBar extends React.Component {
  
  render() {
    return (
      <div>
        <ul>
          <li><a href='/'>Attribute Search</a></li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default HeaderBar;
