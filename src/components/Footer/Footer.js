import React from 'react';
import Wrap from '../../hoc/wrap';
import classes from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const foot = (props) => (
  <Wrap >

  <div className={classes.footer}>

          <div className={classes.row}>

              <div>
                  <h5>Get to Know Us:</h5>
                  <a href="#" target="_self"><h6 >Contact Us</h6> </a>
                  <a href="#" target="_self"><h6>About Us</h6> </a>
                  <a href="#" target="_self"><h6>Press Release</h6> </a>
                  <a href="#" target="_self"><h6>Security</h6> </a>
              </div>


              <div>
                  <h5>Sell With Us:</h5>
                  <a href="#" target="_self"><h6 className="ml-5" >Create Merchent Account</h6> </a>
                  <a href="#" target="_self"><h6>How to Create Account</h6> </a>
                  <a href="#" target="_self"><h6>Your Profit</h6> </a>
                  <a href="#" target="_self"><h6>Stores Connected to Us</h6> </a>
              </div>


              <div>
                  <h5>Our Policy:</h5>
                  <a href="#" target="_self"><h6 className="ml-5" >Return Policy</h6> </a>
                  <a href="#" target="_self"><h6>Terms of use</h6> </a>
                  <a href="#" target="_self"><h6>Privacy</h6> </a>
                  <a href="#" target="_self"><h6>Security</h6> </a>
              </div>


              <div>
                  <h5>Any Comlaints:</h5>
                  <a href="#" target="_self"><h6 className="ml-5" >Your Account</h6> </a>
                  <a href="#" target="_self"><h6>Contact Us</h6> </a>
                  <a href="#" target="_self"><h6>Return</h6> </a>
                  <a href="#" target="_self"><h6>Help</h6> </a>
              </div>


          </div>





      <h2>Follow Us</h2>
       <div className={classes.follow}>
           <a className={classes.followbtn} href="#">
               <i><FontAwesomeIcon icon={['fab', 'facebook-f']} className={classes.x}/></i>
           </a>
           <a className={classes.followbtn} href="#">
               <i><FontAwesomeIcon icon={['fab', 'twitter']} className={classes.x}/></i>
           </a>
           <a className={classes.followbtn} href="#">
               <i><FontAwesomeIcon icon={['fab', 'google']}  className={classes.x}/></i>
           </a>
           <a className={classes.followbtn}>
               <i><FontAwesomeIcon icon={['fab', 'instagram']}  className={classes.x}/></i>
           </a>
           <a className={classes.followbtn}>
               <i><FontAwesomeIcon icon={['fab', 'youtube']}  className={classes.x}/></i>
           </a>
       </div>
    </div>

  </Wrap>
);

export default foot;
