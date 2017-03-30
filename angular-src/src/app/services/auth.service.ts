import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;

    constructor(private http:Http) { }

    registerUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(res => res.json());
    }

    isSignedIn() {
        return this.user == null ? false : true;
    }

    // if it's successful 
    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(res => res.json());
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token); // store token in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // store user in local storage (local storage can only store strings)
        this.authToken = token;
        this.user = user;
    };

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

}