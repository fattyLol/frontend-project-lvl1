#!/usr/bin/env node
import playEvenGame from '../games/even-game.js';
import sayHello from './brain-games.js';

const name = sayHello();
playEvenGame(name);
