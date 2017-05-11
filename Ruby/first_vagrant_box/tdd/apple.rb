class Apple_tree
  attr_accessor :age
  attr_reader :height, :count

  def initialize
    @age = 0
    @height = 10
    @count = 0
  end

  def year_gone_by
    @age += 1
    @height *= 1.1
    @count += 2 if (4..10).include?(@age)
  end

  def pick_apples
    @count = 0
  end
end
