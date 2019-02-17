import { expect } from 'chai';
import getUsers from 'routes/user/get-users';
import mongoose from 'mongoose';

const request = {};
const response = {
  json: arg => arg,
  status: () => ({ json: y => y }),
};

describe('GET /user', () => {
  before(() => mongoose.connect(process.env.MONGODB_TEST, { useNewUrlParser: true }));
  after(() => mongoose.disconnect());

  it('should return an array of User objects', async () => {
    const result = await getUsers(request, response);
    expect(result).to.be.an('array');
    result.forEach((user) => {
      expect(user).to.be.an('object');
      expect(user).to.have.property('_id');
      expect(user._id).not.to.be.null;
      expect(user).to.have.property('name');
      expect(user.name).not.to.be.null;
      expect(user).to.have.property('bags');
      expect(user.bags).not.to.be.null;
    });
  });
});
