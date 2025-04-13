import { formatCurrency, formatDate } from './format';

describe('formatCurrency', () => {
  it('formats USD currency correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats EUR currency correctly', () => {
    expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
  });
});

describe('formatDate', () => {
  it('formats dates correctly', () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    expect(formatDate(date)).toBe('January 15, 2023');
  });
});
