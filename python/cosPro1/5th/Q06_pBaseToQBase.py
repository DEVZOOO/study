'''
문제6. p진법 to q진법
'''

def solution(s1, s2, p, q):
	'''
	@param {string} s1 p진법 수
	@param {string} s2 p진법 수
	@param p 매개변수 진법
	@param q 결과값 진법
	'''
	answer = ''
	
	# p진법을 10진법으로 변환 -> 계산 -> q진법으로 변경
	
	s1To10 = to10(s1, p)
	s2To10 = to10(s2, p)
	
	sum = s1To10 + s2To10
	
	answer = from10ToQ(sum, q)
	
	return answer

def to10(n, p) :
	'''
	@param n 10진법으로 변환할 p진법 숫자
	@param p 진법
	'''
	p = int(p)
	num10 = 0
	
	nLen = len(n) - 1
	
	# 각 문자 * p
	for i, c in enumerate(n) :
		sqIdx = nLen - i
		num10 += int(c) * (p ** sqIdx)
		
	return num10

def from10ToQ(n, q) :
	'''
	@param {int} n 10진수 숫자
	@param q 표현할 진수
	'''
	
	q = int(q)
	toQ = ""
	
	while n > 0 :
		toQ = str(n % q) + toQ
		n = n // q

	return toQ


s1 = "112001"
s2 = "12010"
p = 3
q = 8
ret = solution(s1, s2, p, q)

print("solution 함수의 반환 값은", ret, "입니다.")