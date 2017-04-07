# x = ['magical unicorns',19,'hello',98.98,'world']

def purpleunicorn(x):
    newString = ''
    sum = 0
    numChecker = 0
    stringChecker = 0

    for i in range(0, len(x)):
        if type(x[i]) == int and float:
          sum += x[i]
          numChecker = 1
        else:
            if type(x[i]) == str:
                newString = newString +' ' + x[i]
                stringChecker = 1
    print("Strings:" + newString)
    print ("Sum:", sum)

    if numChecker and stringChecker:
      print("The array you entered is of mixed type")
    else:
        if numChecker:
          print("The array you entered is of integer type")
        else:
            if stringChecker:
                print("The array you entered is of string type")

purpleunicorn(['magical unicorns',19,'hello',98.98,'world'])
