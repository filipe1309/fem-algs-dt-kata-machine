export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return mySolution2(head, needle);
}

function mySolution(head: BinaryNode<number>, needle: number): boolean {
  if (head.value === needle) return true;
  if (head.left === null && head.right === null) return false;

  const resultLeft = head.left ? dfs(head.left, needle) : false;
  const resultRight = head.right ? dfs(head.right, needle) : false;

  return resultLeft || resultRight;
}

function mySolution2(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;
  if (curr.value === needle) return true;

  return mySolution2(curr.left, needle) || mySolution2(curr.right, needle);
}
