class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :event

  enum category: [ :physical_activity, :meal ]

  validates_presence_of :name, :category, :user, :event
  validates_presence_of :photo, if: :meal?
end
