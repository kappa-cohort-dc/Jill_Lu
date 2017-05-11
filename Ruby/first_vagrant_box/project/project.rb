class Project
  attr_accessor :name, :description, :owner
  attr_reader :tasks
  def initialize (name, description, owner)
    @name =name
    @description = description
    @owner = owner
    @tasks = []
  end

  def elevator_pitch
    "#{@name}, #{@description}"
  end

  def get_tasks
    @tasks
  end

  def add_tasks task
    @tasks.push(task)
  end
end
