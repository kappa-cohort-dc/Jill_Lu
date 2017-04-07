class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

        if self.price > 10000:
            self.tax = ".15"
        else:
            self.tax = ".12"

    def display_all(self):
        print "Price:", self.price
        print "Speed:", self.speed
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax

car1 = Car(2000, "35mph", "full", "15mpg")
car1.display_all()

car2 = Car(2000, "5mph", "Not Full", "105 mpg")
car2.display_all()

car3 = Car(200000, "35 mph", "empty", "15mpg")
car3.display_all()
