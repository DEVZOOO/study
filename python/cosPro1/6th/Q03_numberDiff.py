'''
문제3. 큰 수와 작은 수의 차이
'''

def solution(arr, K):
	answer = 0
	
	sortedArr = sorted(arr, reverse=False)
	arrLen = len(arr)
	
	# 각 인덱스부터 뽑아서 최솟값 구하기
	for i in range(arrLen - K) :
		selectedArr = sortedArr[i:i+K]
		diff = max(selectedArr) - min(selectedArr)
		
		if i == 0 :
			answer = diff
			
		answer = min(answer, diff)
	return answer

    
arr = [9, 11, 9, 6, 4, 19]
K = 4
ret = solution(arr, K)

print("solution 함수의 반환 값은", ret, "입니다.")