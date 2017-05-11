require_relative 'project'
RSpec.describe Project do
  before(:each) do
    @project1 = Project.new('Project 1', 'description 1', 'Jill')
    @project2 = Project.new('Project 2', 'description 2', 'Jack')
  end
  it 'has a getter and setter for name attribute' do
    @project1.name = 'Changed Name'
    expect(@project1.name).to eq('Changed Name')
  end
  it 'has a method elevator_pitch to explain name and description' do
    expect(@project1.elevator_pitch).to eq('Project 1, description 1')
    expect(@project2.elevator_pitch).to eq('Project 2, description 2')
  end

  it 'has a getter and setter for owner attribute' do
    @project1.owner= 'Another Owner'
    expect(@project1.owner).to eq('Another Owner')
  end

  describe 'project tasks' do
  it 'has method add_tasks that pushes a single task to the tasks attribute and a tasks method that returns task' do
    @project1.add_tasks("Task #1")
    @project2.add_tasks("Task #2")
    expect(@project1.get_tasks).to eq(["Task #1", "Task #2"])
    end
  end

end
