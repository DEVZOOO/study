'''
Q02. 단어를 순서대로 적으세요
'''

def solution(K, words):
	answer = 0
	
	charLen = 1		# 현재 줄에 써있는 문자 개수
	
	for w in words :
		# 이번 단어를 쓰면 한 줄이 넘어가느냐?
		wLen = len(w)
		
		if charLen + wLen > K :
			answer += 1
			charLen = wLen + 1	# 다음 단어 공백 포함
		else :
			charLen += wLen + 1
	
	return answer

K = 10
words = ["nice", "happy", "hello", "world", "hi"]
ret = solution(10, words)

print("solution 함수의 반환 값은", ret, "입니다.")