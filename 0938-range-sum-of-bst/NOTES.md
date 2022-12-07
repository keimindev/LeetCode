### 이진 탐색 트리 문제

#### 이진 탐색 트리란?
- 이진 탐색(binary search)과 연결리스트(linked list)를 결합한 자료 구조
- 이진 탐색의 효율적인 탐색 능력 + 연결 리스트의 효율적인 자료 입력과 삭제 기능

#### 방법
- 노드 값을 확인
- 찾고 있는 값이 현재 노드보다 작다면 왼쪽 하위 트리 검색
- 찾고 있는 값이 현재 노드보다 크면 오른쪽 하위 트리 검색
- 찾고 있는 값이 바로 그 노드면 그것으로!
- 제일 꼭대기 있는 노드부터 시작해서 탐색한다.
- 일단 첫번째 노드가 시작점이라서 + 

- Depth first search approach
- Add calculate the sum of right side + left side + root node
- Only add nodes to the sum if they fill in the range
