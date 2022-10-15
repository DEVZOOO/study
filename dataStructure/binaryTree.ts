/**
 * Data Structure - Binary Tree
 * [참고] www.geeksforgeeks.org/binary-tree-data-structure
 */

/**
 * tree node
 */
export class BinaryTreeNode<T> {
    private _left: BinaryTreeNode<T>;
    private _right: BinaryTreeNode<T>;
    private _data: T;

    // constructor
    constructor(d: T) {
        this.data = d;
        this.left = undefined;
        this.right = undefined;
    }

    // getter, setter
    get left() {
        return this._left;
    }
    set left(node) {
        this._left = node;
    }

    get right() {
        return this._right;
    }
    set right(node) {
        this._right = node;
    }

    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}

/**
 * binary tree
 */
export class BinaryTree<T> {
    //
    private _root :BinaryTreeNode<T>;

    // getter, setter
    get root() {
        return this._root;
    }
    set root(r) {
        this._root = r;
    }

    // operation
    /*
    Inserting an element.
    Removing an element.
    Searching for an element.
    Traversing an element.
    */

    public insertAt() {

    }


    public print() {
        // BFS 구현하여 출력하기.
    }

}

const dsBinaryTree = () => {
    console.log("Binary Tree");

    const tree: BinaryTree<string> = new BinaryTree();
    const rootNode: BinaryTreeNode<string> = new BinaryTreeNode("root");
    tree.root = rootNode;



};

dsBinaryTree();



