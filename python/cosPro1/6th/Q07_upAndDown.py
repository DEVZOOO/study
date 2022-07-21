'''
문제7. Up And Down 게임
'''

def solution(K, numbers, up_down):
	'''
	K
	numbers {number[]} 참가자가 말한 숫자 배열
	up_down {string[]} 참가자의 대답에 대한 up/down 여부
	'''
	left = 1
	right = K	# max 자연수
	for num, word in zip(numbers, up_down):
		if word == "UP":
			left = max(left, num + 1)
		elif word == "DOWN":
			right = min(right, num - 1)
		elif word == "RIGHT":
			return 1
	return right - left + 1

K1 = 10
numbers1 = [4, 9, 6]
up_down1 = ["UP", "DOWN", "UP"]
ret1 = solution(K1, numbers1, up_down1)

print("solution 함수의 반환 값은", ret1, "입니다.")

K2 = 10
numbers2 = [2, 1, 6]
up_down2 = ["UP", "UP", "DOWN"]
ret2 = solution(K2, numbers2, up_down2)

print("solution 함수의 반환 값은", ret2, "입니다.")

K3 = 100
numbers3 = [97, 98]
up_down3 = ["UP", "RIGHT"]
ret3 = solution(K3, numbers3, up_down3)

print("solution 함수의 반환 값은", ret3, "입니다.")