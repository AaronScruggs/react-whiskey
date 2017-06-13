import React from 'react';
import TagList from '../TagList/TagList.jsx'


class TagSearchPage extends React.Component {

  constructor() {
    super();
    this.handleTagSelection = this.handleTagSelection.bind(this);
    this.tagSearch = this.tagSearch.bind(this);
  }

  componentWillMount() {
    this.setState({
      selectedTags: [],
      whiskies: []
    })
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

  tagSearch(){
    const url = this.props.rootApiUrl + 'shoot/?tags=' + this.state.selectedTags.join(',');
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
        <TagList tags={this.props.tags}
                 selectedTags={this.state.selectedTags}
                 handleTagSelection={this.handleTagSelection}
        />
        <button onClick={this.tagSearch}>Search</button>
      </div>
    );
  }
}

export default TagSearchPage;