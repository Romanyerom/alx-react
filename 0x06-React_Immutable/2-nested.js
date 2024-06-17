export default function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => {
    if (acc === undefined) {
      return undefined;
    }
    return acc[key];
  }, object);
}

// Test cases
const obj = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

console.log(accessImmutableObject(obj, ['name', 'first'])); // Output: 'Guillaume'
console.log(accessImmutableObject(obj, ['name', 'middle'])); // Output: undefined
console.log(accessImmutableObject(obj, ['age'])); // Output: undefined
