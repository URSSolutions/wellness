class ActivitySerializer < ApplicationSerializer
  attributes :id, :name, :description, :photo, :category, :updated_at,
             :created_at

  belongs_to :day
end
