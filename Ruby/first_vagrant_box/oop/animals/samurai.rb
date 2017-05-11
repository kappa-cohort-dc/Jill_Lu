require_relative 'human'

class Samurai < Human
  @@no_of_samurai = 0
  def initialize
    super
    @health= 200
    @@no_of_samurai += 1
  end

  def death_blow(obj)
    if obj.class.ancestors.include?(Human)
      obj.health = 0
      true
    else
      false
    end
  end

  def mediate
    @health= 200
    self
  end

  def self.how_many
    @@no_of_samurai
  end
end


jack= Samurai.new
jill= Samurai.new
jill.death_blow(jack)
puts jack.health
puts jill.health
puts Samurai.how_many
