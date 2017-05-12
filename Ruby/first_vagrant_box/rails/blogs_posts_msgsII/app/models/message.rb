class Message < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :comments, as: :person_comment
  validates :author, :message, presence: true
end
