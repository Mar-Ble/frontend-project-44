import readlineSync from 'readline-sync';

const getEngine = (rules, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n${rules}`);
  const congratulations = `Congratulations, ${userName}!`;

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnsver] = getRound();

    console.log(`Question: ${question}`);
    const userAnsver = readlineSync.question('Your answer: ');

    if (correctAnsver === userAnsver) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnsver}' is wrong answer ;(. Correct answer was '${correctAnsver}'.\nLet's try again, ${userName}!`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(congratulations);
};

export default getEngine;
