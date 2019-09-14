import React, {Component} from 'react';
import Wrap from '../../hoc/wrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import classes from './Layout.css';
import Modal from '../Modal/Modal';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Product_components from '../../containers/Product_components/Product_components';
import ModalContent from '../Modal/ModalContent/ModalContent';

class Layout extends Component {
  state = {
    signingin: false,
    sidedrawer: false,
    signedin: false,
  }
  signinclickedHandeler = () => {
    this.setState({signingin: !this.state.signingin});
  }
  signedinHandeler = () => {
    this.setState({signedin: !this.state.signedin});
    this.setState({signingin: !this.state.signingin});
  }

  sidedrawerHandeler = () =>  {
    this.setState({sidedrawer: !this.state.sidedrawer});
  }
  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return (
      <Wrap>
      <div className={classes.body}>
        <Sidedrawer open={this.state.sidedrawer} click={this.sidedrawerHandeler} signinclick={this.signinclickedHandeler} signedin={this.state.signedin}/>
        <Modal show={this.state.signingin} click={this.signinclickedHandeler}>
              <ModalContent click={this.signinclickedHandeler} clicked={this.signedinHandeler} signedin={this.state.signedin}/>
        </Modal>
        <Menu click={this.signinclickedHandeler} clicked={this.sidedrawerHandeler} signedin={this.state.signedin}/>
        <main className={classes.product}>
          <Product_components signedin={this.state.signedin} cartoon={this.state.cartoon} clickha={this.update}/>
        </main>
        <Footer />
        </div>
      </Wrap>
    )
  }
}

export default Layout;
