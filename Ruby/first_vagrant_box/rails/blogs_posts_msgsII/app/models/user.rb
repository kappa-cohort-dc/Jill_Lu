class User < ActiveRecord::Base
  has_many :posts
  has_many :blog_posts, through: :posts, source: :blog
  has_many :owners
  has_many :comments, as: :person_comment
  has_many :messages
  has_many :blogs, through: :owners, dependent: :destroy

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
