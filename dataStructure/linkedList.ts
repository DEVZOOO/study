/**
 * Data Structure - Linked List
 */

class ListNode<T> {
    data: T;
    next?: ListNode<T>; // 다음 노드
}

class LinkedList<T> {
    private _head: ListNode<T>; // 첫 요소
    private _size: number = 0;  // 총 요소 개수

    // ADD
    // 마지막에 요소 추가
    public addAtTail(data: T) {
        // 첫 요소일 경우
        if (this._size == 0) {
            // this._head = node;
            this.addAtHead(data);
        } else {
            const node: ListNode<T> = { data };
            const tailNode = this.searchIndex(this._size - 1);
            tailNode.next = node;
            this._size += 1;
        }

    }

    // 처음에 요소 추가
    public addAtHead(data: T) {
        const node: ListNode<T> = { data, next : this._head };
        this._head = node;
        this._size += 1;
    }

    // 특정 위치에 요소 추가
    public addAtIndex(data: T, idx: number) {
        if (idx < 0 || idx > this._size - 1) {
            console.error(`out of range: this._size ${this._size}, idx ${idx}`);
            return;
        }

        // 첫번째 요소로 추가할 경우
        if (idx == 0) {
            this.addAtHead(data);
        } else {
            const node: ListNode<T> = { data };
            const prevNode = this.searchIndex(idx - 1);
            const nextNode = prevNode.next;

            // 새로운 노드 삽입
            node.next = nextNode;
            prevNode.next = node;

            this._size += 1;
        }

    }

    // DELETE
    // 특정 위치 요소 삭제
    public deleteAtIndex(idx: number) {
        if (idx < 0 || idx > this._size - 1) {
            console.error(`out of range: this._size ${this._size}, idx ${idx}`);
            return;
        }

        if (idx == 0) {
            this._head = this._head.next;
        } else {
            const prevNode = this.searchIndex(idx - 2);
            const node = this.searchIndex(idx - 1);

            prevNode.next = node.next;
        }

        this._size -= 1;
    }

    // 특정 위치 노드 반환
    public searchIndex(idx: number) {
        let i = 0;
        let node: ListNode<T> = this._head;
        while(node) {
            if (i == idx) {
                return node;
            }

            node = node.next;
            i += 1;
        }

        return undefined;
    }

}

const dsLinkedList = () => {
    const list = new LinkedList<string>();

    console.log("==== 데이터 추가");
    list.addAtTail("Apple");
    list.addAtTail("Banana");
    list.addAtHead("Circle");
    console.log(list);

    console.log("==== 데이터 삭제");
    list.deleteAtIndex(0);
    console.log(list);

};

dsLinkedList();