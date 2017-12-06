import React from 'react';
import styles from './HeaderBar.css';


class HeaderBar extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         loggedName: 'guest'
    //     }
    // }

    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>Attribute Search</a></li>
                    <li onClick={this.props.openSignInModal}>Sign In</li>
                    <li>About</li>
                    <li className="greeting">welcome {this.props.loggedName}</li>
                </ul>
            </div>
        );
    }
}

export default HeaderBar;
