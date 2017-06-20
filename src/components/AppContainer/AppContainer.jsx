import React from 'react';
import TagSearchPage from '../TagSearchPage/TagSearchPage.jsx';
import WhiskeyDetail from '../WhiskeyDetail/WhiskeyDetail.jsx';
import HeaderBar from '../HeaderBar/HeaderBar.jsx';
import { Switch, Route } from 'react-router-dom';


const rootApiUrl = 'https://evening-citadel-85778.herokuapp.com/';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  componentWillMount () {
    this.getTagData();
  }
  
  getTagData () {
    const url = rootApiUrl + 'tag/';
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
    return response.json();
    }).then(data => {
    this.setState({tags: data.results});
    });
  }


  render() {
    return (
      <div>
        <HeaderBar />
        <Switch>
          <Route exact path='/' component={TagSearchPage}/>
          <Route path='/whiskey/:id' component={WhiskeyDetail}/>
        </Switch>
      </div>
    );
  }
}


export default AppContainer;
