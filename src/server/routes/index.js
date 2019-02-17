import createUser from 'routes/user/create-user';
import getUsers from 'routes/user/get-users';
import updateUser from 'routes/user/update-user';
import deleteUser from './user/delete-user';


export default (app) => {
  app.get('/user', getUsers);
  app.post('/user', createUser);
  app.put('/user/:id', updateUser);
  app.delete('/user/:id', deleteUser);
};
