class AddDaysToActivitiesAndFeedbacks < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :day_id, :integer
    add_column :feedbacks, :day_id, :integer
  end
end
