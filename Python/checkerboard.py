
def checkerboard(a,b):
	for i in range (a,b):
		if i % 2 == 1:
			print ("*" + " ")*4
		else:
			print (" " + "*")*4
checkerboard(0,8)
