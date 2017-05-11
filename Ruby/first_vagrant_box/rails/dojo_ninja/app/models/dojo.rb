class Dojo < ActiveRecord::Base
  has_many :ninja, dependent: :destroy
  validates :name, :city, :state, presence: true
  validates :state, length:{ is: 2 }
end
