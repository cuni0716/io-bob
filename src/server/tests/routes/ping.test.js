import pong from 'routes/pong';

describe('ping', () => {
  test('should return pong', () => {
    const response = { send: str => str };
    expect(pong(null, response)).toEqual('pong');
  });
});
