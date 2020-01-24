import { formatNumber } from './index';

describe('NumberUtils Test cases', () => {
  it('should return a thousand separator number', () => {
    expect(formatNumber(123456)).toBe('123,456');
  });
});
