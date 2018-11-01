import './index.scss';
import { getUsers, deleteUser } from './api/userApi';


getUsers().then(result => {
  const container = document.querySelector('.container');
  let userBody = '';

  result.map(user => {
    userBody += `
      <div class='row'>
        <a class='delete-user' href='#' data-id=${user.id}>Delete</a>
        <span>${user.id}</span>
        <span>${user.firstName}</span>
        <span>${user.lastName}</span>
        <span>${user.email}</span>
      </div>
    `
  });

  container.innerHTML = userBody;

  const deleteLinks = document.querySelectorAll('.delete-user');

  console.log(deleteLinks);

  deleteLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      console.log('click');
      const current = event.target;
      event.preventDefault();
      deleteUser(current.attributes['data-id'].value);
      const row = current.parentNode;
      row.parentNode.removeChild(row);
    })
  })
})
