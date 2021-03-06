class User < ActiveRecord::Base
  has_many :events
  has_many :attendees, dependent: :destroy
  has_many :events_attending, through: :attendees, source: :event
  
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :location, :state, presence: true
  validates :first_name, :last_name, length: { in: 2..20 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  has_secure_password
  before_save :email_downcase

  def email_downcase
    self.email.downcase
  end
end
