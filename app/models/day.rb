class Day < ApplicationRecord
  belongs_to :subscription
  has_many :feedbacks
  has_many :activities
end
