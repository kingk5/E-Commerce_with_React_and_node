import React, {Component} from 'react';
import Wrap from '../../hoc/wrap';
import Product_component from '../../components/Product_component/Product_component';
import Ordersummary from '../../components/Product_component/OrderSummary/OrderSummary';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Product_component/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/Spinner/Spinner';
import {withRouter} from 'react-router-dom';

let updatedcart = {};
let grandtotal=0;

class Components extends Component {
  state = {
    catagories: null,
    cart:{},
    ordershow:false,
    payableprice:0,
  }
  componentDidMount() {
    console.log(this.props);
    grandtotal = 0;
    axios.get('https://buissness-58347.firebaseio.com/Catagories.json')
          .then(response => {
            this.setState({catagories: response.data});
          });

  }

incrHandeler = (type) => {
  let updatedCount;
  let price;


    Object.keys(this.state.catagories).map(cata => {
      let prod = this.state.catagories[cata];
      Object.keys(prod).map(cata1 => {
        if(cata1 == type){
          const oldCount = prod[cata1].qty;
          const oldprice = prod[cata1].totalprice;
          updatedCount = oldCount + 1;
          price = prod[cata1].price;
          const updatedcatagories = {
            ...this.state.catagories
          };

          Object.keys(updatedcatagories).map(cata2 => {
            let prod = updatedcatagories[cata2];
            Object.keys(prod).map(cata3 => {
              if(cata3 == type){
                prod[cata3].qty = updatedCount;
                prod[cata3].totalprice = (updatedCount*price);
              }
            })
          });

          grandtotal += price;
          var a = type;
          var b = updatedCount+"x"+price+"="+(updatedCount*price);
          updatedcart[a] = b;

          this.setState({catagories: updatedcatagories,cart: updatedcart,payableprice: grandtotal});
        }
      })
    })
  }

decrHandeler = (type) =>{
  let updatedCount;
  let price;

      Object.keys(this.state.catagories).map(cata => {
        let prod = this.state.catagories[cata];
        Object.keys(prod).map(cata1 => {
          if(cata1 == type){
            const oldCount = prod[cata1].qty;
            const oldprice = prod[cata1].totalprice;
            updatedCount = oldCount - 1;
            price = prod[cata1].price;
            const updatedcatagories = {
              ...this.state.catagories
            };


            Object.keys(updatedcatagories).map(cata2 => {
              let prod = updatedcatagories[cata2];
              Object.keys(prod).map(cata3 => {
                if(cata3 == type){
                  prod[cata3].qty = updatedCount;
                  prod[cata3].totalprice = (updatedCount*price);
                }
              })
            });

            grandtotal -= price;
            var a = type;
            var b = updatedCount+"x"+price+"="+(updatedCount*price);
            updatedcart[a] = b;

            this.setState({catagories: updatedcatagories,cart: updatedcart,payableprice: grandtotal});
          }
        })
      })
}
showorderHandeler = () => {
  this.setState({ordershow:!this.state.ordershow})
}

postdata = () =>{
  const queryParams = [];
  for(let i in this.state.cart){
    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.cart[i]) );
  }
  queryParams.push('price=' + this.state.payableprice);
  const queryString = queryParams.join('&');

  this.props.history.push({
    pathname: '/checkout',
    search: '?' + queryString

  });

}


  render () {
    if(this.state.catagories){
      Object.keys(this.state.catagories).map(cata => {
            let prod = this.state.catagories[cata];
            Object.keys(prod).map(cata1 => {

            })
        })
    }



    let products = <Spinner />;

    if(this.state.catagories){
      products = (  Object.keys(this.state.catagories).map(cata => {
                    let temp = {...cata};
                    return <Product_component cata={cata} prod={this.state.catagories[cata]} clickincr={this.incrHandeler} clickdec={this.decrHandeler} signin={this.props.signedin}/>
        })
      );
    }


    return (
      <Wrap>
        {products}
        <button onClick={this.showorderHandeler}>Order</button>
        <Modal show={this.state.ordershow} click={this.hahaha}><OrderSummary item={this.state.cart} grandtotal={grandtotal} postorder={this.postdata} back={this.showorderHandeler}/></Modal>
      </Wrap>
    )
  }
}

export default withRouter(Components);
