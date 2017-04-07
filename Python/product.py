class Product(object):
    def __init__(self, price, item, weight, brand, cost, status ="for sale"):
        self.price = price
        self.item = item
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = status

    def sold(self):
        self.status = "sold"
        print self
    def tax(self, tax):
        self.price = self.price +(self.price * tax)
        return self
    def returns(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
            return self
        elif reason == "like new":
            self.status = "for sale"
            return self
        elif reason == "opened":
            self.status = "used"
            self.price = self.price * .8
            return self
    def display_info(self):
        print "Price:", self.price
        print "Item Name:", self.item
        print "Weight:", self.weight, "lbs"
        print "Brand:", self.brand
        print "Cost:", self.cost
        print "Status:", self.status
        return self


product1 = Product(5, "Bread", 1, "Wonderbread", 1)
product2 = Product(100, "shoes", 5, "Nike", 60)
product3 = Product(1300, "laptop", 6, "Apple", 800)
product4 = Product(12, "shampoo", 4, "Dove", 6 )
product1.tax(.4).display_info()
product2.tax(.4).returns("defective").display_info()
product3.tax(.4).returns("like new").display_info()
product4.tax(.4).returns("opened").display_info()
