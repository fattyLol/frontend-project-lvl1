#!/usr/bin/env node
import greet from '../src/cli/greeter.js';

console.log('Welcome to the Brain Games!');
const name = greet();
console.log(`Hello, dear ${name}`);
