import React from 'react';
import Wrap from '../../../hoc/wrap';

const checkoutsummary = (props) => {
  const items = Object.keys(props.item).map(subitem => {
    return <li>{subitem}:{props.item[subitem]}</li>
  });
  return(
    <Wrap>
        <h1>Hey! Here's the items you selected</h1>
        <ul>
          {items}
        </ul>
        <button
          onClick={props.checkoutCancelled}>CANCEL</button>
        <button
          onClick={props.checkoutConfirmed}>Proceed</button>
    </Wrap>
  )
};

export default checkoutsummary;
