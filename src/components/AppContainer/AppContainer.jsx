import React from 'react';
import TagList from '../TagList/TagList.jsx'

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
        {this.state.tags && <TagList tags={this.state.tags} />}
      </div>
    );
  }
}


export default AppContainer;