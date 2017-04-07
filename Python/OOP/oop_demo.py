# class User(object):
#     pass

# declare a class
class User(object):
    def __init__(self, name, email):   #when new objects are created use __init__
        self.name = name        #instance variables
        self.email = email      #instance variables
        self.logged = True      #instance variables
    def login(self):            #method created for user login
        self.logged = True
        print self.name + " is logged in."
        return self
    def logout(self):
        self.logged = False
        print self.name + " is not logged in"
        return self
    def show(self):
        print "My name is {}, and I am a {}. You can email me at {}".format(self.name, self.permission, self.email)
        return self

# instance of class
new_user = User("Anna", "Anna@anna.com")
print new_user.email
