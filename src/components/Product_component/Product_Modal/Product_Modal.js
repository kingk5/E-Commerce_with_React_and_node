import React from 'react';
import Product_component from '../Product_component';

const productmodal = (props) =>(
  Object.keys(props.catagories).map(cata => {
               return <Product_component cata={cata.name} prod={cata.prod} clickincr={this.incrHandeler} clickdec={this.decrHandeler} signin={this.props.signedin}/>
   })

);


export default productmodal;
