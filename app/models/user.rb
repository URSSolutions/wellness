class User < ApplicationRecord
  has_many :subscriptions
  has_many :events, through: :subscriptions
  has_many :activities

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum gender: [:male, :female, :other]
  enum chew: [:slow, :medium, :fast]

  def full_name
    "#{first_name} #{last_name}"
  end
end
