import React from 'react';
import Navigation_item from './Navigation_item/Navigation_item';
import classes from './Navigation.css';
import Sign from './Navigation_item/Sign/Sign';

const navigation = (props) =>(
  <ul className={classes.list}>
    <Navigation_item link='/' active>Home</Navigation_item>
    <Navigation_item link='/'>Product</Navigation_item>
    <Navigation_item link='/'>Stores</Navigation_item>
    <Navigation_item link='/'>About</Navigation_item>
    <Sign click2={props.click1} signedin={props.signedin}/>
  </ul>
);

export default navigation;
