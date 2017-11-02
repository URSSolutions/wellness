class BuyEventService
  def self.perform(user, event)
    new(user, event).perform
  end

  def initialize(user_init, event_init)
    @user = user_init
    @event = event_init
  end

  def perform
    if event_is_able_to_be_bought? && !user_already_bought?
      Subscription.transaction do
        create_days Subscription.create!(user: user, event: event)
      end
    end
  end

  private
  attr_reader :user, :event

  def event_is_able_to_be_bought?
    event.users.count < event.max_attendees
  end

  def user_already_bought?
    event.users.include?(user)
  end

  def create_days(subscription)
    (subscription.event.initial_date..subscription.event.final_date).each do |date|
      subscription.days.create!(date: date)
    end
  end
end
