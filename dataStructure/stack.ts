/**
 * Data Structure - Stack
 */

const dsStack = () => {
    const stackData = [];

    // 데이터 삽입
    stackData.push("A");
    stackData.push("D");
    stackData.push("F");
    stackData.push("B");

    // 데이터 읽기 - LIFO, 가장 마지막에 삽입한 데이터
    console.log( stackData.pop() );
};

dsStack();

