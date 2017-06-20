import React from 'react';


class ReviewItem extends React.Component{

  render(){
    const review = this.props.review;
    return(
      <div>
        {review.title}
      </div>
    );
  }
}

export default ReviewItem
