import React from 'react';
import TagSearchPage from '../TagSearchPage/TagSearchPage.jsx';
import WhiskeyDetail from '../WhiskeyDetail/WhiskeyDetail.jsx';
import HeaderBar from '../HeaderBar/HeaderBar.jsx';
import SignInModal from '../SignInModal/SignInModal.jsx';
import {Switch, Route} from 'react-router-dom';
import {logIntoApi} from '../../services/api.jsx';
import styles from './AppContainer.css';


const rootApiUrl = 'https://evening-citadel-85778.herokuapp.com/';

class AppContainer extends React.Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            tags: [],
            isModalOpen: false,
            loggedName: 'guest'
        };
        this.openSignInModal = this.openSignInModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.appLogIn = this.appLogIn.bind(this);
    }

    componentWillMount() {
        this.getTagData();
    }

    getTagData() {
        const url = rootApiUrl + 'tag/';
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({tags: data.results});
        });
    }

    openSignInModal() {

        this.setState({
            isModalOpen: true
        }, function () {
            console.log('open signin modal', this.state);
        });

    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
        console.log('close modal', this.state);
    }

    appLogIn(username, password) {
        console.log('creds', this.state);
        var r = logIntoApi(username, password);
        console.log('r', r);
        this.setState({
            loggedName: username,
            isModalOpen: false
        })
    }

    render() {
        return (
            <div
                className={this.state.isModalOpen ? 'backdrop-style': 'main-style'}
                // onClick={this.closeModal}
            >
                <HeaderBar openSignInModal={this.openSignInModal} loggedName={this.state.loggedName}/>
                <SignInModal isOpen={this.state.isModalOpen} closeModal={this.closeModal} appLogIn={this.appLogIn}/>
                <Switch>
                    <Route exact path='/' component={TagSearchPage}/>
                    <Route path='/whiskey/:id' component={WhiskeyDetail}/>
                </Switch>
            </div>
        );
    }
}


export default AppContainer;
