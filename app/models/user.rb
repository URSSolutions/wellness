class User < ApplicationRecord
  has_many :subsciptions
  has_many :events, through: :subsciption
  has_many :activities

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum gender: [:male, :female, :other]
  enum chew: [:slow, :medium, :fast]

  def full_name
    "#{first_name} #{last_name}"
  end
end
