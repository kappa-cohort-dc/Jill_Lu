a = ["Pandas", "Kittens", "Puppies", "Dolphins", "Otters"]
b = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

# using .at(index) or .fetch(index)
# a.fetch(1)
# a.at(1)

  # using .delete
# b.delete("3") deletes number
# b.delete_at(2) deletes at index

  # using .reverse
# puts a.reverse

  # using .length
# puts a.length
# puts "length of a is #{a.length}"

  # using .sort
# puts a.sort
# puts a.sort.reverse

  # using .slice (index)
# puts a.slice(1)

  # using .shuffle
# puts a.shuffle
# puts a.shuffle.join('-')


  # using .join
# puts a.join('-')


  # using .insert(index, "object")
# puts a.insert(2, "Elephants")

  #using values_at()
puts a.values_at(1,2).join(' and ')
