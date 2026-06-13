import { VERSION } from './index';

describe('VERSION', () => {
  it('should be a valid semver string', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+/);
  });
});
