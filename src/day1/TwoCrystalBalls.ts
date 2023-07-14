// Given two crystal ball that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

export default function two_crystal_balls(breaks: boolean[]): number {
  return mySolution(breaks);
}

function mySolution(breaks: boolean[]): number {
  let jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;
  for (; i < breaks.length - 1; i += jmpAmount) {
    if (breaks[i]) {
      if (jmpAmount == 1) {
        return i;
      }
      i -= jmpAmount;
      jmpAmount = 1;
    }
  }

  return -1;
}

function solution(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  
  let i = jmpAmount;
  for (; i < breaks.length - 1; i += jmpAmount) {
    // Breaks the first crystal ball
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount

  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    // Breaks the second crystal ball
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
