class Event < ActiveRecord::Base
  belongs_to :user
  has_many :attendees, dependent: :destroy
  has_many :users, through: :attendees, source: :user
  has_many :discussions

  validates :name, :date, :location, :state, presence: true
end
