class ProfessionalWithEventSerializer < ApplicationSerializer
  attributes :id, :email, :first_name, :last_name, :occupation, :formation,
             :experience_years, :created_at, :updated_at, :class_name, :events

  def events
    object.events.map do |event|
      event.as_json.tap do |event_json|
        event_json[:users] = event.users.map do |user|
          user.as_json.tap do |user_json|
            user_json[:activities] = user.activities.where(event: event).map(&:as_json)
            user_json[:feedbacks] = user.feedbacks.where(event: event, professional: object).map(&:as_json)
          end
        end
      end
    end
  end
end
