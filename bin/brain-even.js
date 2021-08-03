#!/usr/bin/env node
import readline from 'readline-sync';
import playEvenGame from '../games/even-game.js';

const name = readline.question('Hello, your name?');
console.log(`Hello, ${name}`);
playEvenGame(name);
