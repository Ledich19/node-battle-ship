import { SHIP } from './variables.js';

export const checkSurroundingCells = (field: string[][], x: number, y: number) => {
  const top = y > 0 && field[y - 1][x] === SHIP;
  const bottom = y < field.length - 1 && field[y + 1][x] === SHIP;
  const left = x > 0 && field[y][x - 1] === SHIP;
  const right = x < field[y].length - 1 && field[y][x + 1] === SHIP;

  return top || bottom || left || right;
};
