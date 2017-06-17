import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import TagList from './components/TagList/TagList.jsx';
import AppContainer from './components/AppContainer/AppContainer.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { render } from 'react-dom';


// ReactDOM.render(<AppContainer />, document.getElementById('root'));


ReactDOM.render((
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
), document.getElementById('root'))


// registerServiceWorker();


// const Root = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Match pattern="/" component={AppContainer} />
//       </div>
//     </BrowserRouter>
//   )
// }
//
// render(<Root />, document.querySelector("#root"));
