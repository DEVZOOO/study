/**
 * Data Structure - Queue
 */

/**
 * Queue Node
 */
export class QueueNode<T> {
    data: T;
    next?: QueueNode<T>;
}

/**
 * Queue
 */
export class Queue<T> {
    private _size: number = 0;  // 큐 사이즈
    private _front: QueueNode<T>;  // 첫번째 요소, front
    private _rear: QueueNode<T>;  // 마지막 요소, tail


    // getter, setter
    get front() {
        return this._front;
    }
    set front(f) {
        this._front = f;
    }

    get rear() {
        return this._rear;
    }
    set rear(r) {
        this._rear = r;
    }

    get size() {
        return this._size;
    }

    /**
     * 요소 추가
     */
    public enQueue(data: T): void {
        const node: QueueNode<T> = { data };

        if (this._size == 0) {
            // 첫 노드일 경우
            this._front = node;
        } else {
            this._rear.next = node;

        }

        this._rear = node;
        this._size += 1;    // queue 총 개수 증가
    }

    /**
     * 요소 삭제
     */
    public deQueue(isReturn: boolean = true): QueueNode<T> {
        let node = this._front;
        // 한개일 경우
        if (this._size == 1 && this._front.data == this._rear.data) {
            node = this._rear;
            this._rear = undefined;
        }

        this._front = this._front.next;
        this._size -= 1;

        if (isReturn) {
            return node;
        }
    }

    /**
     * 요소 검색
     * @param idx 인덱스(0부터 시작)
     */
    public search(idx: number): T {
        let i = 0;  // index
        let node = this._front;

        // 전체 노드 돌기
        while(node) {
            // 인덱스 찾으면 리턴
            if (i == idx) {
                return node.data;
            }
            node = node.next;
            i += 1;
        }

        return undefined;
    }

}

const dsQueue = () => {
    const strQueue = new Queue<string>();
    console.log(strQueue);

    // 데이터 추가
    console.log("==== 데이터 추가");
    strQueue.enQueue('Apple');
    console.log(strQueue);
    strQueue.enQueue('Banana');
    console.log(strQueue);
    strQueue.enQueue('Chocolate');
    console.log(strQueue);

    // index 확인
    console.log("==== index 확인");
    console.log(`idx 0 : ${strQueue.search(0)}, idx 1 : ${strQueue.search(1)}, idx 2 : ${strQueue.search(2)}`);

    // 데이터 제거
    console.log("==== 데이터 제거");
    strQueue.deQueue();
    console.log(strQueue);
    strQueue.deQueue();
    console.log(strQueue);
    strQueue.deQueue();
    console.log(strQueue);
};

dsQueue();