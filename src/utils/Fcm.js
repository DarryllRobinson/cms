import camelcaseKeys from './camelcase-keys/index';
import 'whatwg-fetch';
//import Passport from './Passport';

const Fcm = {};
const baseUrl = 'http://localhost:3000/api';

Fcm.getContents = () => {
  const url = `${baseUrl}/contents`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.contents.map(content => camelcaseKeys(content));
    });
  });
};

Fcm.getContent = id => {
  const url = `${baseUrl}/contents/${id}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.content);
    });
  });
};

Fcm.createContent = content => {
  const url = `${baseUrl}/contents`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: content})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.content);
    });
  });
};

Fcm.updateContent = content => {
  const url = `${baseUrl}/contents/${content.id}`;
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: content})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return camelcaseKeys(jsonResponse.content);
    });
  });
};

Fcm.deleteContent = id => {
  const url = `${baseUrl}/contents/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

export default Fcm;
