require 'rails_helper'

RSpec.describe Message, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  context 'with valid attributes' do
    it 'should be valid' do
      message= Message.create(content: 'this is a message', user: User.create(username: 'harrypotter'))
      expect(message).to be_valid
    end
  end
end
