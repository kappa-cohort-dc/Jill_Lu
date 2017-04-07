my_string = ['hello','world','my','name','is','Jill']
char = 'i'

def find_character(char, my_string):
    newarr =[]
    for text in my_string:
        if char in text:
            newarr.append(text)
    print newarr
find_character('i',['hello','world','my','name','is','Jill'])
