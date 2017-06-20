import React from 'react';
import ComparableItem from '../ComparableItem/CompareableItem.jsx';
import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import {rootApiUrl} from '../../Constants.jsx';


class WhiskeyDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      whiskey: {},
      comparables: [],
      reviews: []
    };
  }

  componentWillMount() {
    this.getWhiskey();
  }

  getWhiskey() {
    const url = rootApiUrl + 'whiskey/' + this.props.match.params.id;
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          whiskey: data,
          comparables: data.comparables,
          reviews: data.reviews
        });
    });
  }

  render(){
    const whiskey = this.state.whiskey;
    console.log(whiskey);
    return (
      <div>
        <ul>
          <li><img src={whiskey.detail_img_url} alt="Whiskey Image"></img></li>
          <li>{whiskey.title}</li>
          <li>{whiskey.region}</li>
          <li>${whiskey.price}</li>
        </ul>

        <h3>Comparables</h3>
        <ol>
          {
            this.state.comparables.map(comp =>
              <li key={comp.id}>
                <ComparableItem comp={comp}/>
              </li>
            )
          }
        </ol>

        <h3>Reviews</h3>
        <ol>
          {
            this.state.reviews.map(review =>
              <li key={review.id}>
                <ReviewItem review={review}/>
              </li>
            )
          }
        </ol>


      </div>
    );
  }
}

export default WhiskeyDetail;
