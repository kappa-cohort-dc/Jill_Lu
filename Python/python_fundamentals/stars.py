#Part 1
x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(arr):
    for i in arr:
        stars = "*" * i
        print stars
draw_stars()

#part 2

def draw_stars(arr):
    for i in arr:
        if type(i) == str:
            print i[0] * len(i)
        else:
            stars = "*" * i
            print stars
draw_stars()

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
