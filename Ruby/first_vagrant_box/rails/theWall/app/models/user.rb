class User < ActiveRecord::Base
  has_many :messages
  validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum:6 }
end
