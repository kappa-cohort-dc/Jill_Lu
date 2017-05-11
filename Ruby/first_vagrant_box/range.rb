### change int into string (.to_s) to concat
x = (1..10)

## using .include ##
puts "it does include 5!" if x.include? 5
it does include 5!
 => nil
## using .include?(value)
puts x.include?(8)
 => true

 ## using .max ##
puts "this max in this range is " + x.max.to_s
 this max in this range is 10
  => nil

 ## using .last ##
puts x.last

## using .min ##
puts x.min
