export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): number[] {
        this.mySolutionInsert(value)
        return this.data
    }
    delete(): number {
        return this.data.shift() || 0;
    }

    mySolutionInsert(value: number) {
        this.data.push(value);
        this.length++;
        this.mySolutionInsertHeapifyUp()
    }

    mySolutionInsertHeapifyUp(): void {
        let parentIdx = this.parent(this.length - 1);
        let parent = this.data[parentIdx];
        let nodeIdx = this.length-1;
        let node = this.data[nodeIdx];
        while (node < parent) {
            this.data[nodeIdx] = parent;
            this.data[parentIdx] = node;

            nodeIdx = parentIdx
            parentIdx = Math.floor(((parentIdx - 1) - 1) / 2);
            parent = this.data[parentIdx];
            node = this.data[nodeIdx];
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
}
