import { sharedEnvironment } from './shared-environments';

describe('sharedEnvironments', () => {
  it('should work', () => {
    expect(sharedEnvironment()).toEqual('shared-environments');
  });
});
