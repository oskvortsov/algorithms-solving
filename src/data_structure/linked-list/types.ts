export interface ILinkedList<T> extends Iterable<T> {
    size: number;
    clear(): void;
    isEmpty(): boolean;
    add(elem: T): void;
    addLast(elem: T): void;
    addFirst(elem: T): void;
    addAt(index: number, elem: T): void;
    peekFirst(): T;
    peekLast(): T;
    removeFirst(): T;
    removeLast(): T;
    removeBy(obj: T): boolean;
    removeAt(index: number): T;
    indexOf(elem: T): number;
    contains(data: T): boolean;
    toString(): string;
}
