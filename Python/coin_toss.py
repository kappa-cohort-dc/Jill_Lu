import random

toss = 0
heads = 0
tails = 0

while toss <5000:
	coin = random.randint(1,2)
	if coin == 1:
		heads +=1
		toss +=1
		print 'Attempt ',toss, 'Throwing a coin... Its a head! ... Got',heads,'head so far and',tails,'tails so far'


	if coin ==2:
		tails +=1
		toss +=1
		print 'Attempt ',toss, 'Throwing a coin... Its a tails! ... Got',heads,'heads so far and',tails,'tails so far'
