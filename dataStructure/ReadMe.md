# 자료구조 Data Structure
데이터를 저장, 구성하는데 사용되는 저장 공간   
`A Storage that is used to store and organize data.`

효율적으로 접근, 업데이트 할 수 있도록 컴퓨터상에서 데이터를 정리하는 방식  
`A way to arranging data on computer so that it can be accessed ad updated efficiently.`

## 선형 자료구조 Linear Data Structure
각 요소가 순차 또는 선형적으로 정리된다.  
  > ex) Array, Stack, Queue, Linked List, ..
- 정적 자료구조 Static Data Structure : 고정된 메모리 공간 `Array, ...`
- 동적 자료구조 Dynamic Data Structure : 유연한 메모리 공간    `Queue, Stack, ...`

## 비선형 자료구조 Non-linear Data Structure
각 요소가 순차적 또는 선형적으로 위치하지 않는다.    
단일 실행으로 모든 요소를 방문할 수 없다.    
> ex) Tree, Graph, ...


---


## 배열 Array
- 각 요소를 인접한 메모리 공간에 저장한다.
- 같은 타입의 여러 데이터를 함께 저장한다.<br>
A Collection of items stored at contiguous memory locations.


## 스택 Stack
- 작업이 수행되는 특정 순서(LIFO: Last In First Out, FIFO: First In First Out)를 따른다.<br>
Follows a particular order in which the operation are performed.


## 큐 Queue
- 양쪽 끝이 모두 열려있고 FIFO 방식으로 수행되는 선형 데이터 구조이다.<br>
A Linear data structure that is open at both ends and the operation performed in FIFO order.
> FIFO 원칙
> - First come, first served
> - 티켓팅 기다리는 라인 같은 것, 맨 처음 사람부터 서비스받는다.


## 연결리스트 Linked List
- 각 요소들이 인접한 메모리 공간에 저장되지 않는 선형 데이터 구조이다.<br>
A Linear data structure that the elements are not stored at contiguous memory locations.
- Linked List의 각 요소들은 포인터를 사용하여 연결되어 있다.
- Linked List는 데이터 필드와 다음 요소의 주소 필드를 포함한 노드들로 구성되어 있다.<br>
A Linked list consist of nodes which each node contains a data field and a reference(link) to the next node in the list.
