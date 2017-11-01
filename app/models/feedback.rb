class Feedback < ApplicationRecord
  belongs_to :day
  belongs_to :professional

  validates_presence_of :day, :professional, :description
end
