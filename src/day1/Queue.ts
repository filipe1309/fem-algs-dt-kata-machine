type Node<T> = {
    value: T,
    next?: Node<T>
}

// Insert/Enqueue in the tail, remove/deque in the head
// 1 (head)(tail) // enqueue(1), head = 1
// 1 (head) -> 2 (tail) // enqueue(2), head.next = 2, tail = 2
// 1 (head) -> 2 -> 3 (tail) // enqueue(3), tail = 3
// 1 (head) -> 2 -> 3 -> 4 (tail) // enqueue(4), tail = 4
// 2 (head) -> 3 -> 4 (tail) // deque(1), head = 2
// 3 (head) -> 4 (tail) // deque(2), head = 3

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }
        this.tail.next = newNode
        this.tail = newNode
    }
    
    deque(): T | undefined {
        if (!this.length) return undefined
        this.length--;
        const head = this.head
        this.head = this.head?.next
        if (!this.head) this.tail = undefined
        return head?.value
    }
    
    peek(): T | undefined {
        return this.head?.value
    }
}
