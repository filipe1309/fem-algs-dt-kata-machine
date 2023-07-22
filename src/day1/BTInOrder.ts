function traverse(head: BinaryNode<number> | null, numbers: number[]): number[] {
  if (!head) return numbers;

  // recurse

  // pre

  // recurse
  traverse(head.left, numbers);
  numbers.push(head.value);
  traverse(head.right, numbers);

  // post
  return numbers;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return traverse(head, []);
}

