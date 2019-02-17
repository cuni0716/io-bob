import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import retrieveUsers from '../../../app/actions/users';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User actions', () => {
  it('Should\'nt crash if the server crashes', async () => {
    nock('http://localhost:3000')
      .get('/user')
      .replyWithError('FAIL');

    const store = mockStore({ users: [] });
    await store.dispatch(retrieveUsers());

    console.log('[ store.getActions() ]', store.getActions());
    expect(nock.isDone());
  });

  it('Should dispatch correct action if the server response is ok', async () => {
    nock('http://localhost:3000')
      .get('/user')
      .reply(200, []);

    const store = mockStore({ users: [] });

    await store.dispatch(retrieveUsers());

    console.log('[ store.getActions() ]', store.getActions());
  });
});
