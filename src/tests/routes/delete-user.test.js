import { expect } from 'chai';
import deleteUser from 'routes/user/delete-user';
import mongoose from 'mongoose';
import User from 'models/User';

describe('DELETE /user/:id', () => {
  before(() => mongoose.connect(process.env.MONGODB_TEST, { useNewUrlParser: true }));
  after(() => mongoose.disconnect());

  it('should return Bad Request without id', async () => {
    const requestMock = { params: {}, body: {} };
    const responseMock = { sendStatus: str => str };
    const response = await deleteUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should return Not Found if the requested object not exists', async () => {
    const requestMock = { params: { id: '5c696d67241539407f033505' }, body: { name: 'Smith' } };
    const responseMock = { sendStatus: str => str };
    const response = await deleteUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(404);
  });

  it('should return deleted object if the request is ok', async () => {
    const user = new User({ name: 'Will Smith', bags: Infinity });
    await user.save();

    const requestMock = { params: { id: user._id }, body: { bags: 20 } };
    const responseMock = { json: str => str };
    const response = await deleteUser(requestMock, responseMock);
    expect(response).to.be.a('object');
    expect(response).to.have.property('_id');
    expect(response._id).to.eql(user._id);
    expect(response).to.have.property('name');
    expect(response.name).to.eql(user.name);
    expect(response).to.have.property('bags');
    expect(response.bags).to.eql(user.bags);
    expect(await User.findOne({ _id: user._id })).to.be.null;
  });
});
