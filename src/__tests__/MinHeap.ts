import MinHeap from "@code/MinHeap";

describe("min heap", () => {
    test("insert", function () {
        const heap = new MinHeap();

        expect(heap.length).toEqual(0);
        expect(heap.insert(5)).toEqual([5]);
        expect(heap.length).toEqual(1);
        expect(heap.insert(3)).toEqual([3, 5]);
        expect(heap.insert(69)).toEqual([3, 5, 69]);
        expect(heap.insert(420)).toEqual([3, 5, 69, 420]);
        expect(heap.insert(4)).toEqual([3, 4, 69, 420, 5]);
        expect(heap.insert(1)).toEqual([1, 4, 3, 420, 5, 69]);
        expect(heap.insert(8)).toEqual([1, 4, 3, 420, 5, 69, 8]);
        expect(heap.insert(7)).toEqual([1, 4, 3, 7, 5, 69, 8, 420]);
        expect(heap.length).toEqual(8);
    });

    test("delete", function () {
        const heap = new MinHeap();
    
        expect(heap.length).toEqual(0);
    
        heap.insert(5);
        heap.insert(3);
        heap.insert(69);
        heap.insert(420);
        heap.insert(4);
        heap.insert(1);
        heap.insert(8);
        heap.insert(7);
    
        expect(heap.length).toEqual(8);
        expect(heap.delete()).toEqual(1);
        expect(heap.delete()).toEqual(3);
        expect(heap.delete()).toEqual(4);
        expect(heap.delete()).toEqual(5);
        expect(heap.length).toEqual(4);
        expect(heap.delete()).toEqual(7);
        expect(heap.delete()).toEqual(8);
        expect(heap.delete()).toEqual(69);
        expect(heap.delete()).toEqual(420);
        expect(heap.length).toEqual(0);
    });
})

