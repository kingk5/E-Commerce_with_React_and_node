import React from 'react';
import classes from './Order.css';

const order = (props) =>{
  const items = [];
  let price = 0;
  for(let itemname in props.items){
    items.push({name: itemname,amount: props.items[itemname]});
  }
  console.log(items);
  const itemOutput = items.map(ig => {
    if(ig.name === 'price')
    {
      price = ig.amount;
    }
    else{
      return <div><span style={{textTranform: 'capatalize',display:'inline-block',margin:'5px 8px',border: '1px solid grey',padding:'5px'}} key={ig.name}>{ig.name} = ({ig.amount})</span></div>
    }

  })
  return(
    <div className={classes.Order}>
      <p>Items Ordered: {itemOutput}</p>
      <p>Price: <strong>{Number.parseFloat(price).toFixed(2)} Rs </strong></p>
    </div>
  )
};

export default order;
