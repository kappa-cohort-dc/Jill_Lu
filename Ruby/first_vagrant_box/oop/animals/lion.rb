require_relative 'mammal'

#set default health to 170
class Lion < Mammal
  def fly
    @health -= 10
    self
  end

  def attack_town
    @health -= 50
    self
  end

  def eat_human
    @health += 20
    self
  end
end

simba = Lion.new
simba.display_health
simba.attack_town.attack_town.attack_town.eat_human.eat_human.fly.fly.display_health
