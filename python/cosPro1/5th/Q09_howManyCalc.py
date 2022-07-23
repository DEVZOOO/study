'''
문제9. 몇 번 연산을 해야 하나요
'''

def solution(number, target):
	answer = 0
	
	result = number
	
	while result < target :
		result *= 2
		answer += 1
	
	if result - target > number :
		result //= 2
		answer -= 1
	
	# result > target이면 -
	if result > target :
		while result != target :
			result -= 1
			answer += 1
	# result < target이면 +
	else :
		while result != target :
			result += 1
			answer += 1

	return answer


number1 = 5
target1 = 9
ret1 = solution(number1, target1)

print("solution 함수의 반환 값은", ret1, "입니다.")

number2 = 3
target2 = 11
ret2 = solution(number2, target2)

print("solution 함수의 반환 값은", ret2, "입니다.")

