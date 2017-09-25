class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates_presence_of :event, :user
end
