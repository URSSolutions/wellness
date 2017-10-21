class FeedbackSerializer < ApplicationSerializer
  attributes :id, :description, :updated_at, :created_at,
             :event_id, :user_id, :professional_id

  belongs_to :event
  belongs_to :user
  belongs_to :professional
end
