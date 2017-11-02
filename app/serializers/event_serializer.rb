class EventSerializer < ApplicationSerializer
  attributes :id, :name, :max_attendees, :description, :initial_date,
             :final_date, :price, :created_at, :updated_at

  has_many :professionals
  has_many :users
end
