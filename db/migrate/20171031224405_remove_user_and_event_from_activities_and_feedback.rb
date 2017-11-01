class RemoveUserAndEventFromActivitiesAndFeedback < ActiveRecord::Migration[5.1]
  def change
    remove_column :feedbacks, :event_id
    remove_column :feedbacks, :user_id
    remove_column :activities, :event_id
    remove_column :activities, :user_id
  end
end
