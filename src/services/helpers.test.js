const helpers = require('./helpers');

test('capitalize', () => {
  expect(helpers.capitalize('hello')).toBe('Hello');
  expect(helpers.capitalize('árbol')).toBe('Árbol');
});
