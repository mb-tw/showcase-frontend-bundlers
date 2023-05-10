function random(arrayLength) {
  const array = new Uint32Array(arrayLength);
  self.crypto.getRandomValues(array);
  return array;
}

export default random;
