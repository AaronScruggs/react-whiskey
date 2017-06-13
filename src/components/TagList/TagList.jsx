import React from 'react';
import TagItem from '../TagItem/TagItem.jsx'
import styles from './TagList.css';



class TagList extends React.Component {
  constructor() {
    super();
    this.handleTagSelection = this.handleTagSelection.bind(this);
  }

  componentWillMount() {
    this.setState({
    selectedTags: [],
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
  render() {
    return (
      <div>
        <p>list of tags</p>
        <ol>
          {
            this.props.tags.map(tag =>
            <li key={tag.title}>
              <TagItem tag={tag}
                       tagSelector={this.handleTagSelection}
                       selected={this.state.selectedTags.indexOf(tag.title) > -1}
              />
            </li>
            )
          }
        </ol>
        
      </div>
    );
  }
}


export default TagList;