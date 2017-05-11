#print 1-255
# for i in 1..255
#   puts "#{i}"
# end


# print odd numbers between 1-255
# for i in 1..255
#   if i % 2 != 0
#     puts "#{i}"
#   end
# end

#print sum from 0-255
# sum = 0
# (0..255).each do |i|
#   sum += i
#   puts "New number: #{i} Sum: #{sum}"
# end

# iterate through an array
# x = [1,3,5,7,9,13]
# x.each { |num| print num, "," }

# find max in any array
# arr = [-3, -5, -7]
# puts arr.max

# get average
# arr = [2, 10, 3]
# sum = 0
# arr.each do |x|
#   sum += x
# end
# average = sum / arr.length
# puts average

# array with odd nums
# x = (1..255).to_a
# odds= x.find_all { |i| i%2 != 0}
# puts odds.to_s


##########Greater than Y
# arr = [1, 3, 5, 7]
# new_arr = []
# y = 3
#
# arr.each do |item|
#   if item > y
#     new_arr.push(item)
#   end
# end
# puts new_arr.length
# puts new_arr.to_s


# Square the Values
# x = [1, 5, 10, -2]
# square = x.map { |i| i*i}
# puts square.to_s

# Eliminate Negative numbers
# x= [1,5,10,-2]
# temp = []
#
# x.each do |val|
#   if val < 0
#     temp.push(0)
#   else
#     temp.push(val)
#   end
# end
# arr = temp
# puts arr.to_s



#max, min, average
# x=[1, 5, 10, -2]
# sum = 0
# x.each do |i|
#   sum += i
# end
# avg = sum/x.length
# puts "max: #{x.max}, min: #{x.min}, avg: #{avg}"


#shifting the values in the Array Ruby
# Returns 0 for the Last Array Index
arr = [1, 5, 10, -2]
temp = []

arr.each_with_index do |val, idx|
  if arr[idx + 1] == nil
    temp.push(0)
  else
    temp.push(arr[idx + 1]);
  end
end
arr = temp

puts arr.to_s


# number to string
# x= [-1,-3,2]
# temp = []
#
# x.each do |val|
#   if val < 0
#     temp.push("Dojo")
#   else
#     temp.push(val)
#   end
# end
# arr = temp
# puts arr.to_s
