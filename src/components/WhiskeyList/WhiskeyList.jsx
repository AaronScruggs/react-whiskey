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
                <a href={'/whiskey/' + whiskey.id}>{whiskey.title}</a>
              </li>
          )
          }
        </ol>

      </div>
    );

  }
}


export default WhiskeyList;
