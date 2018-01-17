import { Headers } from './base';

// The currently logged in user
let token = null;

export const isAuthed = () => {
  return token === null;
};

export const Token = () => {
  return token;
};

export const AuthApi = {
  localRegister: (email, password) => {
    if(!email || !password) {
      return Promise.reject('Email and password cannot be blank');
    }

    return fetch('/api/auth/localRegister', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //TODO save the token
        token = data.token;
        return data.user;
      });
  },

  localLogin: (email, password) => {
    if(!email || !password) {
      return Promise.reject('Email and password cannot be blank');
    }

    return fetch('/api/auth/localLogin', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //TODO save the token
        token = data.token;
        return data.user;
      });
  },

  logout: () => {
    token = null;
  },
};
