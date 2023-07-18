type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

// 5, append(5)
// 5 <-> 7, append(7)
// 5 <-> 7 <-> 9, append(9)
// 5 <-> 7 <-> 9, get(2) = 9
// 5 <-> 9, removeAt(1) = 7, length = 2
// 5 <-> 9 <-> 11, append(11)
// 5 <-> 11, removeAt(1) = 9
// 5 <-> 11, remove(9) = undefined
// 11, removeAt(0) = 5
// removeAt(0) = 11, length = 0
// 5, prepend(5)
// 7 <-> 5, prepend(7)
// 9 <-> 7 <-> 5, prepend(9)
// 9 <-> 7 <-> 5, get(2) = 5
// 9 <-> 7 <-> 5, get(0) = 9
// 7 <-> 5, remove(9) = 9, length = 2
// 7 <-> 5, get(0) = 7

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        let newNode = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (this.length = 0) return;
        this.length++;

        let newNode = { value: item } as Node<T>;
        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr?.next;
        }

        newNode.next = curr
        newNode.prev = curr?.prev

        if (curr && curr.prev?.next) curr.prev.next = newNode
        if (curr && curr.prev) curr.prev = newNode
    }

    append(item: T): void {
        this.length++;
        let newNode = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value == item) break;
            curr = curr?.next;
        }

        if (curr == undefined || (curr.value != item)) return;
        
        this.length = Math.max(0, this.length - 1);

        if (curr.prev?.next) curr.prev.next = curr?.next
        if (curr.next?.prev) curr.next.prev = curr?.prev

        if (curr.value === this.head?.value) this.head = curr.next
        if (curr.value === this.tail?.value) this.tail = curr.prev
        
        return curr?.value
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr?.next && i < idx; i++) {
            curr = curr?.next;
        }

        return curr?.value
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr?.next;
        }

        if (curr == undefined) return;

        this.length = Math.max(0, this.length - 1);

        if (curr.prev?.next) curr.prev.next = curr?.next
        if (curr.next?.prev) curr.next.prev = curr?.prev

        if (curr.value === this.head?.value) this.head = curr.next
        if (curr.value === this.tail?.value) this.tail = curr.prev

        return curr?.value
    }
}
