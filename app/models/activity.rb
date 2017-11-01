class Activity < ApplicationRecord
  belongs_to :day

  enum category: [ :physical, :meal, :weight ]

  validates_presence_of :category, :day
  validates_presence_of :name, :photo, if: :meal?
  validates_presence_of :name, if: :physical?
  validates_presence_of :description, if: :weight?
end
