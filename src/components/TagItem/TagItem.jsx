import React from 'react';
import styles from './TagItem.css';


class TagItem extends React.Component {

  render() {
    const title = this.props.tag.title;
    return (
      <div>
        <div className={this.props.selected ? 'selectedTag': ''} onClick={() => this.props.tagSelector(title)}>
          {title}
        </div>
      </div>
    );
  }
}


export default TagItem;
