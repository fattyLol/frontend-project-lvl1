import readlineSync from 'readline-sync';

const greet = () => readlineSync.question('May I ask your name? ');

export default greet;
