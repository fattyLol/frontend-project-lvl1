import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const greet = () => {
  rl.question('May I ask your name? ', (name) => {
    console.log(`Hello, dear ${name}`);
  });
};

export default greet;
