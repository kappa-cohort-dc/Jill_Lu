# #integer
x = 200
if type(x) == int:
    if x >= 100:
        print "That's a big number!"
    else:
        print "That's a small number"


#string
bS = "Tell me and I forget."
if type(bS) == str:
    if bS <= 50:
        print "Long sentence."
    else:
        print "Short sentence."

#list
# mL = [3,5,7,34,3,2,113,65,8,89,16]
if type(mL) == list:
    if len(mL)>= 10:
        print "Big list!"
    else:
        print "Short list"
