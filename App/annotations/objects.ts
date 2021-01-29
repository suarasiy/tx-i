// Functions being defined inside of an object
// with the function annotations on it
const profile = {
  name: 'Suara',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Desctructuring
// Destructuring annotations around object
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
