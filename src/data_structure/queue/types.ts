export interface Queue<T> {
    offer(elem: T): void;
    poll(): T;
    peek(): T;
    size: number;
    isEmpty(): boolean;
}
