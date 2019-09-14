import React from 'react';
import classes from './Sign.css';
import Profile from '../Profile/Profile';

const sign = (props) =>(
  <div className={classes.sign}>
    <span className={classes.right}>{props.signedin ? <Profile /> : <a  onClick={props.click2}>SignIn/SignUp</a>}</span>
  </div>
);

export default sign;
