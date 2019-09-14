import React,{Component} from 'react';
import axios from '../../../axios-order';
import Spinner from '../../../components/Spinner/Spinner';

class ContactData extends Component{
  state={
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading:false,
  }

orderHandeler = (event) =>{
  event.preventDefault();
  const orders={
    items:this.props.items,
    price:this.props.price,
    customer:{
      name: 'prince',
      email: 'khatri.prinec1999@gmail.com',
      address: {
        street: 'vev',
        postalCode: '84844'
      }
    },
    deliverymethod:'fast'
  }
    this.setState({loading:true});
    axios.post('/orders.json',orders)
          .then(response => {
            this.setState({loading:false});
            this.props.history.push('/');
          })
          .catch(error => {
              this.setState({loading:false});
          });
}

  render(){
    let form = (
      <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="postalCode" placeholder="Your postalCode" />
          <button onClick={this.orderHandeler}>ORDER</button>
      </form>
    );
    if(this.state.loading){
      form=<Spinner />;
    }
    return(
      <div>
          <h4>enter your contact data</h4>
          {form}
      </div>
    )
  }
}

export default ContactData;
