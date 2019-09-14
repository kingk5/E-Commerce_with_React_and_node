import React from 'react';
//import Wrap from '../../hoc/wrap';
import Navigation from './Navigation/Navigation';
import classes from './Menu.css';

const menu = (props) => (
  <header className={classes.Toolbar}>
    <span onClick={props.clicked} className={classes.menu}><div></div><div></div><div></div></span>
    <nav className={classes.DesktopOnly}>
      <Navigation click1={props.click} signedin={props.signedin}/>
    </nav>
  </header>
);

export default menu;
