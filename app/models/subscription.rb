class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_many :days
  has_many :activities, through: :days

  validates_presence_of :event, :user
end
