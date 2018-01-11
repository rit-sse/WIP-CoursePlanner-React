import { isAuthed, Token } from './auth';

export const Headers = () => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if(isAuthed) {
    headers.Authorization = 'JWT ' + Token();
  }

  return headers;
};
