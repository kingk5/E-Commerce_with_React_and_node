import React from 'react';
import Wrap from '../../../../../hoc/wrap';
import classes from './Profile.css';
import {NavLink} from 'react-router-dom';

const profile = () =>(
  <Wrap>
      <div className={classes.wel}><a>Welcome!</a>
          <ul className={classes.ul}>
              <li><NavLink>Profile</NavLink></li>
              <li><NavLink>Cart</NavLink></li>
              <li><NavLink to="/orders" exact activeClassName={classes.active}>Orders</NavLink></li>
          </ul>
      </div>
  </Wrap>
)

export default profile;
