#!/usr/bin/env node
import greet from '../src/cli/greeter.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  console.log(`Hello, dear ${name}`);
  return name;
};

export default sayHello;
