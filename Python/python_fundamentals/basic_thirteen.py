def print_(1,255):
for count in range (1,256):#range does not include last value
    print count

def odd(1,255):
for i in range (1,256):
    if i % 2 == 1:
        print i

for i in range (0,255): #arr_new=[for i in range (256)]-> sum(arr_new)
    print i
    sum = sum + i
    print sum

# arr = [2,9,7,4,2,9,3]
for x in range(0,len(arr)):
    print arr[x]


for x in range(0,len(arr)):
    min= arr[0]
    if arr[x]<min:
        min= arr[x]
    print min

#print average of array
avg = 0
sum = 0
for x in range(0, len(arr)):
    sum += arr[x]
    avg = sum(len(arr))
    print avg

#shift array val
idx = 1
while idx < len(arr)
    arr[idx-1] = arr[idx]
    
