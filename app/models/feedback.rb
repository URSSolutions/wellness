class Feedback < ApplicationRecord
  has_one :day
  belongs_to :professional

  validates_presence_of :day, :professional, :description
end
