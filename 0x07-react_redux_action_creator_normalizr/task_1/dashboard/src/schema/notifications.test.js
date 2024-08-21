import { normalizedData } from './notifications';

test('normalized data has correct result array', () => {
  expect(normalizedData.result).toEqual([
    "5debd76480edafc8af244228",
    "5debd764507712e7a1307303",
    // Continue with all IDs from notifications.json
  ]);
});

test('normalized data has correct users entity', () => {
  const user = normalizedData.entities.users['5debd764a7c57c7839d722e9'];
  expect(user).toEqual({
    age: 25,
    email: "poole.sanders@holberton.nz",
    id: "5debd764a7c57c7839d722e9",
    name: { first: "Poole", last: "Sanders" },
    picture: "http://placehold.it/32x32"
  });
});

