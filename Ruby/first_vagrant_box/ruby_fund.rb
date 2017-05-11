# arr = ["I", "code", "therefore", "I", "am"]
# for i in 0...arr.count
#   puts arr[i]
# end

#
# def say_hello name1, name2
#   if name1.empty? or name2.empty?
#     return "Who are you?!"
#   end
#   # Doesn't reach the last line because we used return
#   "hello, #{name1} and #{name2}"
# end
# puts say_hello "", ""

#
# class CodingDojo
#   @@no_of_branches = 0
#   def initialize(id, name, address)
#     @branch_id = id
#     @branch_name = name
#     @branch_address = address
#     @@no_of_branches += 1
#     puts "Created branch #{@@no_of_branches}"
#   end
#   def hello
#     puts "Hello CodingDojo!"
#   end
#   def display_all
#     puts "Branch ID: #{@branch_id}"
#     puts "Branch Name: #{@branch_name}"
#     puts "Branch Address: #{@branch_address}"
#   end
#   def self.num_of_branches
#     @@no_of_branches
#   end
# end
# # seattle = CodingDojo.new(1, "Seattle", "123 Seattle Avenue")
# # san_jose = CodingDojo.new(2, "San Jose", "456 San Jose Boulevard")
# # burbank = CodingDojo.new(3, "Burbank", "789 Burbank Street")
# puts seattle.branch_name
