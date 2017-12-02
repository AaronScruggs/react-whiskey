import React from 'react';
import styles from './SignInModal.css';


class SignInModal extends React.Component {


    render() {
        // console.log('open modal', this.props.isOpen);
        if (this.props.isOpen === false) {
            return null;
        }
        return (
            <div className="sign-in-box">
                <div className="field-wrap">
                    <label>
                        Email Address<span className="req">*</span>
                    </label>
                    <input type="email" required/>
                </div>

                <div className="field-wrap">
                    <label>
                        Password<span className="req">*</span>
                    </label>
                    <input type="password" required/>
                </div>

                <button onClick={this.props.closeModal}>close</button>
                <button onClick={this.props.closeModal}>submit</button>


            </div>
        );
    }
}

export default SignInModal;
//<button onClick={this.props.closeModal}>close</button>