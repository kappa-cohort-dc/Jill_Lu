require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  context 'With valid attributes' do
    it 'should be valid' do
      # user = User.create(username: 'harrypotter')
      expect(build(:user)).to be_valid
    end
  end
  context 'with invalid attributes'do
    it 'should not be valid if username field is left blank' do
      user = User.create(username:'')
      expect(user).to be_invalid
    end
    it 'should not be valid if username is not unique' do
      User.create(username:'harrypotter')
      user = User.new(username:'harrypotter')
      expect(user).to be_invalid
    end
  end
end
