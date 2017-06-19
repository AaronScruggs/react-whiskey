import React from 'react';
import styles from './WhiskeyList.css';


class WhiskeyList extends React.Component {


  render(){
    return (
      <div>
        <ol>
          {this.props.whiskies.map(
            whiskey =>
              <li key={whiskey.id} className="whiskeyItem">
                <a href={'/whiskey/' + whiskey.id}>
                  <li><img src={whiskey.detail_img_url} alt="Whiskey Image"></img></li>
                  {whiskey.title}
                </a>
              </li>
          )
          }
        </ol>

      </div>
    );

  }
}


export default WhiskeyList;
