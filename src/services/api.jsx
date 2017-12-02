import React from 'react';
import {rootApiUrl} from '../Constants.jsx';


export function logIntoApi(username, password) {
    var url = rootApiUrl + 'api-token-auth/';
    var credentials = {
        'username': username,
        'password': password
    };
    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)

        }).then(response => {
        return response.json();
    }).then(data => {
        localStorage.setItem('token', data.token);
    })
}
