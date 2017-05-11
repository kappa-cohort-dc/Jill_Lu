class MathDojo
  # your code here
  attr_reader :output

  def initialize
    @output = 0
  end

  def add(*numbers)
    @output += numbers.flatten.reduce(0, :+)
    self
  end

  def subtract(*numbers)
    @output -= numbers.flatten.reduce(0, :+)
    self
  end
end

challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).output
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).output
puts challenge1
puts challenge2
