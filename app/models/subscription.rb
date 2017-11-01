class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_many :days

  validates_presence_of :event, :user
end
