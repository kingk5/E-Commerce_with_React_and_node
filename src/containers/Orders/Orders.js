import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';

class Orders extends Component {
  state={
    orders:[],
    loading:true,
  }
  componentDidMount(){
    axios.get('/orders.json')
          .then(res => {
            const fetchedOrders = [];
            for(let key in res.data){
              fetchedOrders.push({...res.data[key],id:key});
            }
            this.setState({loading:false,orders:fetchedOrders});
          })
          .catch(error =>{
            this.setState({loading:false});
          });
  }

  render(){
    return(
      <div>
        {this.state.orders.map(order => (
          <Order key={order.id}
          items = {order.items}
          price={order.price}/>
        ))}
      </div>
    );
  }
}

export default Orders;
