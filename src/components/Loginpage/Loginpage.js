import React from 'react';
import Wrap from '../../hoc/wrap';
import classes from './Loginpage.css';


const login = (props) =>(
  <Wrap>
            <div className={classes.modalcontent}>
                <a onClick={props.click}><div className={classes.close}>+</div></a>

                <form action="">
                    <input className={classes.login} type="text" placeholder="Name" />
                    <input className={classes.login} type="text" placeholder="E-mail" />
                    <a className={classes.button} onClick={props.clicked}>Sumit</a>
                </form>
            </div>
  </Wrap>
);

export default login;
