import readline from 'readline-sync';

const evenGameRound = () => {
  const number = Math.floor(Math.random() * 50) + 1;
  const parity = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = readline.question('Answer: ');

  if (answer === parity) {
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parity}'.`);
  return false;
};

const playEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    if (!evenGameRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default playEvenGame;
