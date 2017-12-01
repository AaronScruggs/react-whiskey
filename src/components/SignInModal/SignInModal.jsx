import React from 'react';
import styles from './SignInModal.css';


class SignInModal extends React.Component {
  
  
  render() {
    // console.log('open modal', this.props.isOpen);
    if(this.props.isOpen === false){
      return null;
    }
    return(
      <div className="sign-in-box">
        Log in to your account
        
        <button onClick={this.props.closeModal}>close</button>
      </div>
    );
  }
}

export default SignInModal;
