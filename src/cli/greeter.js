import readlineSync from 'readline-sync'

const greet = () => {
  return readlineSync.question('May I ask your name? ');
};

export default greet;
