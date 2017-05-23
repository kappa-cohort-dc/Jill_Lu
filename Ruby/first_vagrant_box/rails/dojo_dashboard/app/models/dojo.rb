class Dojo < ActiveRecord::Base
  has_many :students 
  validates :branch, :address, :city, :state, presence: true
  validates :state, length: { is: 2 }
end
