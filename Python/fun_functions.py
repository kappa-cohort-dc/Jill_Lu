#Odd/Even
def odd_even(a,b):
	for i in range (a,b):
		if i % 2 == 1:
			print 'number is',i, 'this is an odd number'
		else:
			print 'number is',i,'this is an even number'
odd_even(1, 2001)

#Multiply
a = [2,4,10,16]

def multiply(a,b):
	newArr = [i * b for i in a]
	print newArr
multiply([2,4,10,16],5)

# def multiply(a, b):
# 	newArr = []
# 	# for i in range(0(len()):
# 	# 	newArr.append(a[i]*b)
# 	print newArr
# # multiply([2,4,10,16],5)
