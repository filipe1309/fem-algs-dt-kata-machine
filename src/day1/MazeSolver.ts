const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // Off the map
  if (curr.x < 0 || curr.x >= maze[0].length
    || curr.y < 0 || curr.y >= maze.length) return false;

  // Its a wall
  if (maze[curr.y][curr.x] === wall) return false;

  // At the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // We have seen it
  if (seen[curr.y][curr.x]) return false;
  
  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    const newPoint = {x: curr.x + x, y: curr.y + y };
    if (walk(maze, wall, newPoint, end, seen, path)) return true;
  }
  
  // if (walk(maze, wall, {x: curr.x,   y: curr.y + 1}, end, seen, path)) return true;
  // if (walk(maze, wall, {x: curr.x + 1, y: curr.y}, end, seen, path)) return true;
  // if (walk(maze, wall, {x: curr.x,   y: curr.y - 1}, end, seen, path)) return true;
  // if (walk(maze, wall, {x: curr.x - 1, y: curr.y}, end, seen, path)) return true;
  
  path.pop();

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
