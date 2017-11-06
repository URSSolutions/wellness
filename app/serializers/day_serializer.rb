class DaySerializer < ApplicationSerializer
  attributes :id, :date, :created_at, :updated_at, :subscription_id

  has_many :feedbacks
  has_many :activities
end
