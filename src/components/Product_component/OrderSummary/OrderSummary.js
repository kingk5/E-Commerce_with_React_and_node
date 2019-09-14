import React from 'react';
import classes from './OrderSummary';

const ordersummary = (props) =>{
  const items = Object.keys(props.item).map(subitem => {
    console.log(subitem+"reached");
    return <li>{subitem}:{props.item[subitem]}</li>
  });
console.log(items);

  return(
    <div className={classes.OrderSummary}>
      <h1>Your Order</h1>
      <ul>
          {items}
      </ul>
      <div>GrandTotal:{props.grandtotal}</div>
      <button onClick={props.back}>Cancel</button>
      <button onClick={props.postorder}>Continue</button>
    </div>
  );
};

export default ordersummary;
