
// A função soma dois números, caso os números sejam iguais, a soma é triplicada
const sum = require('./soma');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});