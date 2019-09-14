import React from 'react';
import Wrap from '../../hoc/wrap';
import classes from './Product_component.css';
import Product from './Product/Product';

const component = (props) => (
  console.log(props.prod),
  <Wrap>
    <div className={classes.head}><h2>{props.cata}</h2></div>
    <div className={classes.flex}>
    {Object.keys(props.prod).map(cata1 => {
      return <Product total={props.prod[cata1].qty} name={cata1} price={props.prod[cata1].price} url={props.prod[cata1].url} clickincr={props.clickincr} clickdec={props.clickdec} signedin={!props.signin}/>
    })}
    </div>
  </Wrap>
);

export default component;
