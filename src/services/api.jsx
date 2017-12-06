import React from 'react';
import {rootApiUrl} from '../Constants.jsx';


export function apiResponse(response){
    console.log(response.ok);
    if (!response.ok) {
            return false;
        }
    else{
        return response.json();
    }

}

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

        }).then(apiResponse).then(function(data) {
        if(data){
            localStorage.setItem('token', data.token);
        }
        else{
            console.log('bad creds');
        }
    })
}
