import React from 'react';
import TagList from '../TagList/TagList.jsx'
import WhiskeyList from '../WhiskeyList/WhiskeyList.jsx';
import {rootApiUrl} from '../../Constants.jsx';


class TagSearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      tags: [],
      selectedTags: [],
      whiskies: []
    };
    this.handleTagSelection = this.handleTagSelection.bind(this);
    this.tagSearch = this.tagSearch.bind(this);
    this.getTagData = this.getTagData.bind(this);
    this.requestTags = this.requestTags.bind(this);
  }

  componentWillMount() {
    this.getTagData();
  }

  handleTagSelection(tagTitle) {
    var oldTags = this.state.selectedTags.slice();
    var tagIndex = this.state.selectedTags.indexOf(tagTitle);
    if(tagIndex === -1){
      oldTags.push(tagTitle);
    } else{
      oldTags.splice(tagIndex, 1);
    }
    this.setState({selectedTags: oldTags});
  }

  requestTags(url) {
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
    return response.json();
    }).then(data => {
    this.setState({tags: this.state.tags.concat(data.results)});
      console.log('n ', data.next);
      if(data.next){
        return(this.requestTags(data.next));
      }
    });
  };

  getTagData() {
    var url = rootApiUrl + 'tag/';
    this.requestTags(url);
  }


  tagSearch(){
    const url = rootApiUrl + 'shoot/?tags=' + this.state.selectedTags.join(',');
    console.log(url);
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
    return response.json();
    }).then(data => {
    this.setState({whiskies: data.results});
    });
  }


  render(){

    return (
      <div>
        <TagList
          tags={this.state.tags}
          selectedTags={this.state.selectedTags}
          handleTagSelection={this.handleTagSelection}
        />
        <button onClick={this.tagSearch}>Search</button>
        <WhiskeyList whiskies={this.state.whiskies}/>
      </div>
    );
  }
}

export default TagSearchPage;
