class Event < ApplicationRecord
  has_many :subscription
  has_many :users, through: :subscription

  validates_presence_of :name, :max_attendees, :description, :initial_date, :final_date, :price
  validates_numericality_of :max_attendees, :price, greater_than_or_equal_to: 0
  validates_numericality_of :max_attendees, only_integer: true
end
