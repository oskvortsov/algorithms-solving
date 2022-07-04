export interface Stack<T> {
    size: number;
    isEmpty(): boolean;
    push(elem: T): void;
    pop(): T;
    peek(): T;
}
