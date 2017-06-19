import React from 'react';
import TagItem from '../TagItem/TagItem.jsx'
import styles from './TagList.css';


class TagList extends React.Component {

  render() {
    return (
      <div>
        <p>list of tags</p>
        <ol>
          {
            this.props.tags.map(tag =>
            <li key={tag.title}>
              <TagItem tag={tag}
                       tagSelector={this.props.handleTagSelection}
                       selected={this.props.selectedTags.indexOf(tag.title) > -1}
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
