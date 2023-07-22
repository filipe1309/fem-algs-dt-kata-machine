function traverse(head: BinaryNode<number> | null, numbers: number[]): number[] {
  if (!head) return numbers;

  // recurse

  // pre

  // recurse
  traverse(head.left, numbers);
  traverse(head.right, numbers);

  // post
  numbers.push(head.value);
  return numbers;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return traverse(head, [])
}
