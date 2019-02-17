import { expect } from 'chai';
import updateUser from 'routes/user/update-user';
import mongoose from 'mongoose';
import User from 'models/User';

describe('PUT /user/:id', () => {
  before(() => mongoose.connect(process.env.MONGODB_TEST, { useNewUrlParser: true }));
  after(() => mongoose.disconnect());

  it('should return Bad Request without id', async () => {
    const requestMock = { params: {}, body: {} };
    const responseMock = { sendStatus: str => str };
    const response = await updateUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should return Bad Request without any param to update', async () => {
    const requestMock = { params: { id: '5c696d67241539407f033505' }, body: {} };
    const responseMock = { sendStatus: str => str };
    const response = await updateUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should return Bad Request if the new name is not a string', async () => {
    const requestMock = { params: { id: '5c696d67241539407f033505' }, body: { name: 22 } };
    const responseMock = { sendStatus: str => str };
    const response = await updateUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should return Bad Request if the new bags is not a number', async () => {
    const requestMock = { params: { id: '5c696d67241539407f033505' }, body: { bags: 'So many!' } };
    const responseMock = { sendStatus: str => str };
    const response = await updateUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should return Not Found if the requested object not exists', async () => {
    const requestMock = { params: { id: '5c696d67241539407f033505' }, body: { name: 'Smith' } };
    const responseMock = { sendStatus: str => str };
    const response = await updateUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(404);
  });

  it('should update the object name if the request is ok', async () => {
    const user = new User({ name: 'Will', bags: 200 });
    await user.save();

    const requestMock = { params: { id: user._id }, body: { name: 'Smith' } };
    const responseMock = { json: str => str };
    const response = await updateUser(requestMock, responseMock);

    expect(response).to.be.a('object');
    expect(response).to.have.property('_id');
    expect(response._id).not.to.be.null;
    expect(response).to.have.property('name');
    expect(response.name).to.eql(requestMock.body.name);
    expect(response).to.have.property('bags');
    expect(response.bags).to.eql(user.bags);
  });

  it('should update the object bags if the request is ok', async () => {
    const user = new User({ name: 'Will', bags: 200 });
    await user.save();

    const requestMock = { params: { id: user._id }, body: { bags: 20 } };
    const responseMock = { json: str => str };
    const response = await updateUser(requestMock, responseMock);

    expect(response).to.be.a('object');
    expect(response).to.have.property('_id');
    expect(response._id).not.to.be.null;
    expect(response).to.have.property('name');
    expect(response.name).to.eql(user.name);
    expect(response).to.have.property('bags');
    expect(response.bags).to.eql(requestMock.body.bags);
  });

  it('should update the object params if the request is ok', async () => {
    const user = new User({ name: 'Will', bags: 200 });
    await user.save();

    const requestMock = { params: { id: user._id }, body: { name: 'Smith', bags: 20 } };
    const responseMock = { json: str => str };
    const response = await updateUser(requestMock, responseMock);

    expect(response).to.be.a('object');
    expect(response).to.have.property('_id');
    expect(response._id).not.to.be.null;
    expect(response).to.have.property('name');
    expect(response.name).to.eql(requestMock.body.name);
    expect(response).to.have.property('bags');
    expect(response.bags).to.eql(requestMock.body.bags);
  });
});
