import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
  state={
    items:null,
    totalprice:0,
  }

  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const item = {};
    let price= '0';
    for(let param of query.entries()){
      if(param[0] === price){
          price = param[1];
      }else{
        item[param[0]] = param[1];
      }

    }
    this.setState({items:item,totalprice:price});
  }

  checkoutCancelledHandeler = () =>{
    this.props.history.goBack();
  }
  checkoutConfirmedHandeler = () =>{
    this.props.history.replace('/checkout/contact-data');
  }

  render(){
    return(
      <div>
        <CheckoutSummary
        checkoutCancelled={this.checkoutCancelledHandeler}
        checkoutConfirmed={this.checkoutConfirmedHandeler}
        item = {this.state.items}/>
        <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData items={this.state.items} price={this.state.totalprice} {...props}/>)} />
      </div>
    )
  }
}

export default Checkout;
