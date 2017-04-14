# Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.
def print_odd():
    for i in range(1,1000):
        if i % 2 ==1:
            print i
print_odd()

#Create another program that prints all the multiples of 5 from 5 to 1,000,000.
def print_multiples():
    for i in range(5, 1000000):
        if i % 5 == 0:
            print i
print_multiples()


#Sum List- Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
def print_sum():
    print sum(a)
print_sum()


#Average List- Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
def print_avg():
    print sum(a)/len(a)
print_avg()
