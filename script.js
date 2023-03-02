const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let generateKey = (item, characters) => {
  let randomKey = '';
  for (let i = 0; i <= item; i++) {
    randomKey += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomKey;
}
const key = generateKey(16, characters);
console.log(key);