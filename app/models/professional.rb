class Professional < ApplicationRecord
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  validates_presence_of :occupation, :first_name, :last_name, :experience_years
  validates_numericality_of :experience_years, greater_than_or_equal_to: 0
end
