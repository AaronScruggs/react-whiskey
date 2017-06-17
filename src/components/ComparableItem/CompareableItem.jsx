import React from 'react';


class ComparableItem extends React.Component{


  render(){
    const comp = this.props.comp;
    return (
      <div>
        {comp.title}
      </div>
    );
  }
}

export default ComparableItem;
