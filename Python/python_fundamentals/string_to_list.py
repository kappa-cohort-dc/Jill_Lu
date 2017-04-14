# find and replace
str = "It's thanksgiving day. It's my birthday,too!"
print str.find("day") #double check
newStr = str.replace('day','month')
print newStr

#print min and max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

# # #first and last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]

#new list
x = [19,2,54,-2,7,12,98,32,10,-3,6]
list.sort(x)
print x
#[-3, -2, 2, 6, 7, 10, 12, 19, 32, 54, 98]
first_half = x[:5]
print first_half
#[-3, -2, 2, 6, 7]
sec_half = x[5:]
print sec_half
#[10, 12, 19, 32, 54, 98]
sec_half.insert(0, first_half)
print sec_half
