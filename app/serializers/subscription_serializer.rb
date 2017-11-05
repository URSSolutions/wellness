class SubscriptionSerializer < ApplicationSerializer
  attributes :id, :user_id, :event_id, :created_at, :updated_at, :weights

  has_one :user
  has_one :event

  def weights
    object.activities.where(category: :weight).pluck(:description)
  end
end
