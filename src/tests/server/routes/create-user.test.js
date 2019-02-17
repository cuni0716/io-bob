import { expect } from 'chai';
import createUser from 'routes/user/create-user';
import mongoose from 'mongoose';

describe('POST /user', () => {
  before(() => mongoose.connect(process.env.MONGODB_TEST, { useNewUrlParser: true }));
  after(() => mongoose.disconnect());

  it('Should return Bad Request without name', async () => {
    const requestMock = { body: { bags: 8 } };
    const responseMock = { sendStatus: str => str };
    const response = await createUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('Should return Bad Request without bags', async () => {
    const requestMock = { body: { name: 'Will' } };
    const responseMock = { sendStatus: str => str };
    const response = await createUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('Should return Bad Request if name is not a String', async () => {
    const requestMock = { body: { name: 2, bags: 8 } };
    const responseMock = { sendStatus: str => str };
    const response = await createUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('Should return Bad Request if bags is not a Number', async () => {
    const requestMock = { body: { name: 'Will', bags: 'eight' } };
    const responseMock = { sendStatus: str => str };
    const response = await createUser(requestMock, responseMock);
    expect(response).to.be.a('number');
    expect(response).to.eql(400);
  });

  it('should create and return User if the request is ok', async () => {
    const requestMock = { body: { name: 'Will', bags: 8 } };
    const responseMock = { status: () => ({ json: b => b }) };
    const response = await createUser(requestMock, responseMock);
    expect(response).to.be.a('object');
    expect(response).to.have.property('_id');
    expect(response._id).not.to.be.null;
    expect(response).to.have.property('name');
    expect(response.name).to.eql(requestMock.body.name);
    expect(response).to.have.property('bags');
    expect(response.bags).to.eql(requestMock.body.bags);
  });
});
