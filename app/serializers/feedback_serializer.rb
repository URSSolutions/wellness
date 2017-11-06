class FeedbackSerializer < ApplicationSerializer
  attributes :id, :description, :updated_at, :created_at
  
  belongs_to :day
  belongs_to :professional
end
