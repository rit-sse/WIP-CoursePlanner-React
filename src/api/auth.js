import { Headers } from './base';

// The currently logged in user
let token = null;

export const isAuthed = () => {
  return token === null;
};

export const Token = () => {
  return token;
};

export const Methods = {
  localRegister: (email, password) => {
    return fetch('/api/auth/localRegister', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //TODO save the token
        console.log(data);
        return true;
      });
  },

  localLogin: (email, password) => {
    return fetch('/api/auth/localLogin', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //TODO save the token
        console.log(data);
        return true;
      });
  },

  logout: () => {
    token = null;
  },
};
