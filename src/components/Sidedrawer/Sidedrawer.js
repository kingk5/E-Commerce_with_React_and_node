import React from 'react';
import Wrap from '../../hoc/wrap';
import Backdrop from '../Backdrop/Backdrop';
import Navigation from '../Menu/Navigation/Navigation';
import classes from './Sidedrawer.css';
import Sign from '../Menu/Navigation/Navigation_item/Sign/Sign';

const sidedrawer = (props) => {
  let attachclasses = [classes.sidedrawer, classes.close];
  if(props.open){
    attachclasses = [classes.sidedrawer, classes.open]
  }
  return(
      <Wrap>
        <Backdrop show={props.open} click={props.click}/>
        <div className={attachclasses.join(' ')}>
          <nav>
            <Navigation click1={props.signinclick} signedin={props.signedin}/>

          </nav>
        </div>
      </Wrap>
  );
};

export default sidedrawer;
