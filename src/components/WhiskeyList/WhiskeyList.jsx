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
                {whiskey.title} 
              </li>
          )
          }
        </ol>

      </div>
    );

  }
}


export default WhiskeyList;
