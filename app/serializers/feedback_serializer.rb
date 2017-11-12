class FeedbackSerializer < ApplicationSerializer
  attributes :id, :description, :updated_at, :created_at, :professional_id

  belongs_to :day
  belongs_to :professional
end
