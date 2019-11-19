export function getRandomInclusive(min, max, dec = 0) {
  switch (dec) {
    case 0:
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    default:
      return parseFloat(Math.random() * (max - min + 1) + min).toFixed(dec);
  }
}
