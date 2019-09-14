import React from 'react';
import classes from './Product.css';

const product = (props) =>{
  return(
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={props.url} />
      </div>
      <div className={classes.clr}><span className={classes.left}>{props.name}</span><span className={classes.right}>{props.price} ₹</span></div>
      <div>
        <button className={classes.button} onClick={()=>props.clickdec(props.name)} disabled={props.signedin}>-</button><span className={classes.span}>{props.total}</span><button className={classes.button} onClick={()=>props.clickincr(props.name)} disabled={props.signedin}>+</button>
      </div>

    </div>
  )


};

export default product;
