class Event < ActiveRecord::Base
  belongs_to :user
  validates :name, :date, :location, :state, presence: true
end
