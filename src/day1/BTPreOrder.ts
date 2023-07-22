export default function pre_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = []
  traverse(head, path)
  return path;
}

function traverse(head: BinaryNode<number> | null, numbers: number[]): void {
  if (!head) return;

  // recurse

  // pre
  numbers.push(head.value);

  // recurse
  traverse(head.left, numbers);
  traverse(head.right, numbers);

  // post
}
