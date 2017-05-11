a = ["Pandas", "Kittens", "Puppies", "Dolphins", "Otters"]
 ## .any? { |obj| block} => returns true or false ##
# puts ['kittens'].any?
#  => true
# puts a.any? { |word| word.length >=6}
#  => true
# puts a.any? { |word| word.length >=46}
#  => false
#
#   ## .each => calls block once for each element in ruby self, pass that element as block param
# puts a.each
# => #<Enumerator: ["Pandas", "Kittens", "Puppies", "Dolphins", "Otters"]:each>

  ## .collect { |obj| block} => returns a new array w the results of running block once for every element in enum
  ##e.g. (1..4).collect { |i| i*i } # => [1, 4, 9, 16]
  ##e.g. (1..4).collect { "cat" } # => ["cat", "cat", "cat", "cat"]
