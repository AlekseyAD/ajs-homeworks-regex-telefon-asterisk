import phoneFormat from '../app';

test('Eдиный формат телефона', () => {
  const phone = '+79270000000';
  const result = phoneFormat('8 (927) 000-00-00');
  expect(result).toBe(phone);
});

test('Eдиный формат телефона', () => {
  const phone = '+79600000000';
  const result = phoneFormat('+7 960 000 00 00');
  expect(result).toBe(phone);
});

test('Eдиный формат телефона', () => {
  const phone = '+860000000000';
  const result = phoneFormat('+86 000 000 0000');
  expect(result).toBe(phone);
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('Общий тест, приведения телефонов к единому формату', (phone, result) => {
  expect(phoneFormat(phone)).toBe(result);
});
