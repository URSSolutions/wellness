class Feedback < ApplicationRecord
  belongs_to :user
  belongs_to :professional
  belongs_to :event

  validates_presence_of :event, :professional, :user, :description
end
