import React from 'react';
import {rootApiUrl} from '../Constants.jsx';



export function logIntoApi(username, password) {
  var url = rootApiUrl + 'api-token-auth/';
  fetch(url, 
    {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        method: 'POST'
      }}).then(response => {
    return response.json();
  }).then(data => {
    localStorage.setItem('token', data.token);
  })
}
