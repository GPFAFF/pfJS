import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return removeUser(`users/${id}`);
}

function removeUser(url) {
  const request = new Request(`${baseUrl}/${url}`, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function get(url) {
  return fetch(`${baseUrl}/${url}`).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  /* eslint-disable no-console */
  console.log(error);
}
