class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :event

  enum category: [ :physical, :meal, :weight ]

  validates_presence_of :category, :user, :event
  validates_presence_of :name, :photo, if: :meal?
  validates_presence_of :name, if: :physical?
  validates_presence_of :description, if: :weight?
end
