class Product < ActiveRecord::Base
  belongs_to :user
  has_many :buyers, dependent: :destroy
  has_many :users, through: :buyers, source: :user
  validates :name, :price, presence: true
end
