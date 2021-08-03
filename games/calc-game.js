import readline from 'readline-sync';

const playOneRound = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operation = Math.floor(Math.random() * 3) + 1;
  let result;
  switch (operation) {
    case 1:
      console.log(`Question: ${num1} + ${num2}`);
      result = num1 + num2;
      break;
    case 2:
      console.log(`Question: ${num1} - ${num2}`);
      result = num1 - num2;
      break;
    case 3:
      console.log(`Question: ${num1} * ${num2}`);
      result = num1 * num2;
      break;
    default:
      console.log('ERROR!');
  }
  const answer = readline.question('Answer: ');

  if (Number(answer) === result) {
    console.log('Correct');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const playCalcGame = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    if (!playOneRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;
