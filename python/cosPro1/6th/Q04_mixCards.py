'''
문제4. 카드 섞기
'''

def solution(n, mix, k):
	'''
	n {number} 맨 윗장 숫자
	mix {number} 섞는 횟수
	k {number} 알고 싶은 카드 위치
	'''
	answer = 0
	card = [_ for _ in range(1, n+1)]
	while mix != 0:
		mix = mix - 1
		card_a, card_b = [0 for _ in range(n//2)], [0 for _ in range(n//2)]
		for i in range(0, n):
			if i < n//2:
				card_a[i] = card[i]
			else:
				card_b[i - n // 2] = card[i]	#
		for i in range(0, n):
			if i % 2 == 0:
				card[i] = card_a[i//2]
			else:
				card[i] = card_b[i//2]
	answer = card[k-1]
	return answer

n = 6
mix = 3
k = 3
ret = solution(n, mix, k)

print("solution 함수의 반환 값은", ret, "입니다.")