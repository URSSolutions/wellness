class Activity < ApplicationRecord
  belongs_to :user

  enum category: [ :physical_activity, :meal ]

  validates_presence_of :name, :category
  validates_presence_of :photo, if: :meal?
end
