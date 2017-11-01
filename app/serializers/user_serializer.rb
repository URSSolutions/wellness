class UserSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :full_name, :class_name, :email,
             :created_at, :updated_at, :occupation, :phone, :birth_date,
             :gender, :height, :weight, :physical_activities, :smoke,
             :smoke_frequency, :drink, :drink_frequency, :family_diseases,
             :medicines, :daily_water_quantity, :favorite_dishes,
             :disliked_dishes, :chew

  has_many :events
  has_many :subscriptions
end
