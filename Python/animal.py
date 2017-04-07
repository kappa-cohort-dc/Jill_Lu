class Animal(object):
    def __init__(self, name, health= 100):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print self.name
        print self.health
        return self

class Dog(Animal):
    def __init__(self, name, health):
        super(Dog, self).__init__(name, health)
        self.health = 150
    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name, health):
        super(Dragon, self).__init__(name, health)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a Dragon!"
        print self.health

# animal = Animal("panda")
# animal.walk().walk().walk().run().run().displayHealth()

# animal = Dog("Dog", 200)
# print animal.walk().walk().walk().run().run().pet().displayHealth()


# animal = Dragon("dragon", 100000)
# print animal.walk().walk().walk().run().run().fly().fly().displayHealth()
