class ActivitySerializer < ApplicationSerializer
  attributes :id, :name, :description, :photo, :category, :updated_at,
             :created_at, :user_id, :event_id

  belongs_to :user
  belongs_to :event
end
