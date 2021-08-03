#!/usr/bin/env node
import sayHello from './brain-games.js';
import playCalcGame from '../games/calc-game.js';

const name = sayHello();
playCalcGame(name);
