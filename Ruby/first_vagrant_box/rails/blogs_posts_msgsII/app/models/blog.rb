class Blog < ActiveRecord::Base
  has_many :posts, dependent: :destroy
  has_many :owners
  has_many :comments, as: :person_comment
  has_many :user_posts, through: :posts, source: :user
  validates :name, :description, presence: true
end
