import React from 'react';
import LoginPage from '../../Loginpage/Loginpage';

const content = (props) => {
  let modalShow = <LoginPage click={props.click} clicked={props.clicked}/>;
  if(props.signedin == true)
  {
      modalShow = props.cartoon;
  }

  return(
    <div>{modalShow}</div>
  );
};

export default content;
