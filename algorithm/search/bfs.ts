/**
 * 그래프 탐색 - BFS 너비 우선 탐색
 */

import { Queue } from "../../dataStructure/queue";
import {BinaryTree, BinaryTreeNode} from "../../dataStructure/binaryTree";

/**
 * BFS Search
 * @param q node queue, 노드 데이터에 tree 노드
 * @param printInner 메소드 내에서 출력할지
 */
export function BFSUtil<T>(q: Queue<BinaryTreeNode<T>>, printInner = false) {
    const visitedNode = []; // 방문한 노드 순서대로 저장
    let route = ""; // 출력 위한 변수

    while (q.size > 0) {
        const firstNode: BinaryTreeNode<T> = q.deQueue().data;

        route += `${route.length > 0 ? ' > ' : ''}${firstNode.data}`;

        visitedNode.push(firstNode.data);

        // 자료구조에 따라 변경되는 부분
        // ================= START =================
        // 1. children node 확인
        const left = firstNode.left;
        const right = firstNode.right;

        // 2. 있으면 모두 queue 에 추가
        left && q.enQueue(left);
        right && q.enQueue(right);
        // ================= END =================

    }

    printInner && console.log(route);
    
    return visitedNode;

}

const alBFS = () => {
    // Define Tree
    const tree: BinaryTree<string> = new BinaryTree();
    const rootNode: BinaryTreeNode<string> = new BinaryTreeNode("root: Apple");

    const node1: BinaryTreeNode<string> = new BinaryTreeNode("left: Bear");
    const node2: BinaryTreeNode<string> = new BinaryTreeNode("right: Car");

    const node3: BinaryTreeNode<string> = new BinaryTreeNode("left: Dry");
    const node4: BinaryTreeNode<string> = new BinaryTreeNode("left: Game");
    const node5: BinaryTreeNode<string> = new BinaryTreeNode("right: Horse");

    const node6: BinaryTreeNode<string> = new BinaryTreeNode("left: Eagle");
    const node7: BinaryTreeNode<string> = new BinaryTreeNode("right: Fire");

    node3.left = node6;
    node3.right = node7;

    node2.left = node4;
    node2.right = node5;

    node1.left = node3;

    rootNode.left = node1;
    rootNode.right = node2;

    tree.root = rootNode;


    const q: Queue<BinaryTreeNode<string>> = new Queue();
    q.enQueue(rootNode);

    // search
    BFSUtil(q);
}

alBFS();


