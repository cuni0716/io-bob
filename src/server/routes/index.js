import createUser from 'routes/user/create-user';

export default (app) => {
  app.post('/user', createUser);
};
