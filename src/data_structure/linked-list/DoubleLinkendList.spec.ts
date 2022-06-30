import { DoubleLinkedList } from './DoubleLinkedList';


describe('DoubleLinkedList', () => {
    let list: DoubleLinkedList<number>;
    const EMPTY_LIST_ERROR = new Error('Empty list');
    const ILLEGAL_INDEX_OF_LIST_ERROR = new Error('Illegal Index');

    beforeEach(() => {
        list = new DoubleLinkedList<number>();
    })

    it('empty test', () => {
        expect(list.isEmpty()).toBeTruthy();
        expect(list.size).toBe(0);
    })

    it('removeFirst of empty list', () => {
        expect(() => list.removeFirst()).toThrow(EMPTY_LIST_ERROR);
    })

    it('removeLast of empty list', () => {
        expect(() => list.removeLast()).toThrow(EMPTY_LIST_ERROR);
    })

    it('peekFirst of empty list', () => {
        expect(() => list.peekFirst()).toThrow(EMPTY_LIST_ERROR);
    })

    it('peekLast of empty list', () => {
        expect(() => list.peekLast()).toThrow(EMPTY_LIST_ERROR);
    })

    it('addAt of empty list', () => {
        expect(() => list.addAt(2, 5)).toThrow(ILLEGAL_INDEX_OF_LIST_ERROR);
    })

    it('addFirst', () => {
        list.addFirst(3);
        expect(list.size).toBe(1);

        list.addFirst(5);
        expect(list.size).toBe(2);
        expect(list.peekFirst()).toBe(5);
    })

    it('addLast', () => {
        list.addLast(1);
        expect(list.size).toBe(1);

        list.addLast(3);
        expect(list.peekLast()).toBe(3);
        expect(list.size).toBe(2);
    })

    it('addAt', () => {
        list.addAt(0, 1);
        list.addAt(1, 2);
        list.addAt(1, 3);
        list.addAt(1, 4);
        list.addAt(2, 5);

        expect(list.size).toBe(5);
    })

    it('removeFirst', () => {
        list.addFirst(1984);
        expect(list.removeFirst()).toBe(1984);
        expect(list.isEmpty()).toBeTruthy();
    })

    it('removeLast', () => {
        list.addLast(84);

        expect(list.removeLast()).toBe(84);
        expect(list.size).toBe(0);
    })

    it('peekFirst', () => {
        list.add(2);
        list.add(4);

        expect(list.peekFirst()).toBe(2);
    })

    it('peekLast', () => {
        list.add(2);
        list.add(4);

        expect(list.peekLast()).toBe(4);
    })

    it('peeking', () => {
        // 5
        list.addFirst(5);
        expect(list.peekFirst()).toBe(5);
        expect(list.peekLast()).toBe(5);

        // 6 - 5
        list.addFirst(6);
        expect(list.peekFirst()).toBe(6);
        expect(list.peekLast()).toBe(5);

        // 7 - 6 - 5
        list.addFirst(7);
        expect(list.peekFirst()).toBe(7);
        expect(list.peekLast()).toBe(5);

        // 7 - 6 - 5 - 8
        list.addLast(8);
        expect(list.peekFirst()).toBe(7);
        expect(list.peekLast()).toBe(8);

        // 7 - 6 - 5
        list.removeLast();
        expect(list.peekFirst()).toBe(7);
        expect(list.peekLast()).toBe(5);

        // 6 - 5
        list.removeFirst();
        expect(list.peekFirst()).toBe(6);
        expect(list.peekLast()).toBe(5);

        // 5
        list.removeFirst();
        expect(list.peekFirst()).toBe(5);
        expect(list.peekLast()).toBe(5);

        // empty
        list.removeLast();
        expect(list.isEmpty()).toBeTruthy();
    })

    it('removing', () => {
        const strs = new DoubleLinkedList<string>();

        ['a', 'b', 'c', 'd', 'e', 'f'].forEach(symbol => strs.add(symbol));
        ['d', 'e', 'f', 'a', 'b', 'c'].forEach(symbol => strs.removeBy(symbol));

        expect(strs.isEmpty()).toBeTruthy();

        expect(strs.removeBy('non exists')).toBeFalsy();
    })

    it('removeAt', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);

        list.removeAt(1);
        list.removeAt(3);
        expect(list.peekFirst()).toBe(1);
        expect(list.peekLast()).toBe(6);

        list.removeAt(3);
        list.removeAt(2);
        list.removeAt(1);
        list.removeAt(0);
        expect(list.isEmpty()).toBeTruthy();
    })

    it('clear', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        expect(list.size).toBe(4);

        list.clear();
        expect(list.isEmpty()).toBeTruthy();

        list.add(3);
        list.add(2);
        list.add(1);
        expect(list.size).toBe(3);
        expect(list.peekFirst()).toBe(3);
        expect(list.peekLast()).toBe(1);

        list.clear()
        expect(list.isEmpty()).toBeTruthy();

        expect(() => list.removeAt(666)).toThrow(ILLEGAL_INDEX_OF_LIST_ERROR);
    })

    it('indexOf', () => {
        [1, 9, 8, 4].forEach(symbol => list.add(symbol));

        expect(list.indexOf(1)).toBe(0);
        expect(list.indexOf(9)).toBe(1);
        expect(list.indexOf(8)).toBe(2);
        expect(list.indexOf(4)).toBe(3);

        expect(list.indexOf(404)).toBe(-1);
    })

    it('contains', () => {
        [1, 9, 8, 4].forEach(num => list.add(num));

        [1, 9, 8, 4].forEach(num => expect(list.contains(num)).toBeTruthy());
        expect(list.contains(404)).toBeFalsy();
    })

    it('iterable', () => {
        const testArr = [1, 9, 8, 4];
        testArr.forEach(num => list.add(num));

        let index = 0;
        for (let i of list) {
            expect(testArr[index++] == i).toBeTruthy();
        }
    })

    it('toString', () => {
        expect(list.toString()).toBe('[]');

        const testArr = [1, 9, 8, 4];
        testArr.forEach(num => list.add(num));

        expect(list.toString()).toBe('[1, 9, 8, 4]');
    })

})
