require_relative "apple"
RSpec.describe Apple_tree do
  before(:each) do
    @apple1 = Apple_tree.new
    @apple2 = Apple_tree.new
  end
  #test age
  it "age should have a getter and setter attribute age" do
    expect(@apple1.age).to eq(0)
  end
  #test height
  it "height has a getter attribute" do
    expect(@apple1.height).to eq(10)
  end
  #test count
  it "count has a getter attribute" do
    expect(@apple1.count).to eq(0)
  end
  #test year_gone_by method
  it "year_gone_by add 1 year to age" do
    @apple1.year_gone_by
    expect(@apple1.age).to eq(1)
  end
  #test height increase 10%
  it "height increases 10%" do
    @apple1.year_gone_by
    expect(@apple1.height.floor).to eq(11)
  end
  # test reader attr for count
  it "cannot set count attribute" do
    expect{@apple1.count=10}.to raise_error(NoMethodError)
  end

  #test reader attr for height
  it "cannot set height attribute" do
    expect{@apple1.height=7}.to raise_error(NoMethodError)
  end

  it "apple tree should increase count by 2 between years 4-10" do
    5.times{@apple1.year_gone_by}
    expect(@apple1.count).to eq(4)
  end

  it "apple tree will not increase count below years 3" do
    2.times{@apple1.year_gone_by}
    expect(@apple1.count).to eq(0)
  end

  it "apple tree maxes at 14 after year 10" do
    15.times{@apple1.year_gone_by}
    expect(@apple1.count).to eq(14)
  end

  it "changes apple count to zero with count method" do
    5.times{@apple1.year_gone_by}
    @apple1.pick_apples
    expect(@apple1.count).to eq(0)
  end
  
end
