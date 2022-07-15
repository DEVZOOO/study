'''
Q01. 꽃피는 봄이 언제 오나요
'''

def solution(n, garden):
	answer = 0
	visited = [[False]*n for _ in range(n)]	# 방문 여부 T/F

	# 모든 꽃이 필 떄까지 반복
	while True :
		if isAllFlower(garden) :
			break

		visited = [[False]*n for _ in range(n)]
		
		for i in range(n) :
			for j in range(n) :
				if visited[i][j] :
					continue

				# 방문 체크
				visited[i][j] = True
				# 꽃피우기
				if garden[i][j] == 1 :
					garden, visited = bloomFlowers(garden, visited, i, j)
		answer += 1

	return answer

def isAllFlower(garden) :
	'''
	모든 꽃이 피었는지 여부
	'''
	for i in garden :
		for j in i :
			if j != 1 :
				return False
	return True

def bloomFlowers(garden, visited, i, j) :
    '''
    (i, j) 위치 기준으로 상, 하, 좌, 우에 꽃 피우고 방문 처리
    '''
    n = len(garden)
    # 12시
    if i - 1 >= 0 :
        garden[i-1][j] = 1
        visited[i-1][j] = True
    # 3시
    if j + 1 < n :
        garden[i][j+1] = 1
        visited[i][j+1] = True
    # 6시
    if i + 1 < n :
        garden[i+1][j] = 1
        visited[i+1][j] = True
    # 9시
    if j - 1 >= 0 :
        garden[i][j-1] = 1
        visited[i][j-1] = True
    
    return garden, visited
	
n1 = 3
garden1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
ret1 = solution(n1, garden1)

print("solution 함수의 반환 값은", ret1, "입니다.")

n2 = 2
garden2 = [[1, 1], [1, 1]]
ret2 = solution(n2, garden2)

print("solution 함수의 반환 값은", ret2, "입니다.")