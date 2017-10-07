class Professional < ApplicationRecord
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  has_many :feedbacks
  has_and_belongs_to_many :events

  validates_presence_of :occupation, :first_name, :last_name, :experience_years
  validates_numericality_of :experience_years, greater_than_or_equal_to: 0

  def full_name
    "#{first_name} #{last_name}"
  end
end
