import React from 'react';
import {logIntoApi} from '../../services/api.jsx';
import styles from './SignInModal.css';


class SignInModal extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.inputChange = this.inputChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    inputChange(e){
        var field = e.target.type;
        var newState = {};
        newState[field] = e.target.value;

        this.setState(newState, function(){
            console.log('input change', this.state);
        });

    }

    submitLogin(){
        console.log('creds', this.state);
        logIntoApi(this.state.email, this.state.password);
    }

    render() {
        if (this.props.isOpen === false) {
            return null;
        }
        return (
            <div className="sign-in-box">
                <div className="field-wrap">
                    <label>
                        Email Address<span className="req">*</span>
                    </label>
                    <input onChange={this.inputChange} type="email" required/>
                </div>

                <div className="field-wrap">
                    <label>
                        Password<span className="req">*</span>
                    </label>
                    <input onChange={this.inputChange} type="password" required/>
                </div>

                <button onClick={this.props.closeModal}>close</button>
                <button onClick={this.submitLogin}>submit</button>

            </div>
        );
    }
}

export default SignInModal;
