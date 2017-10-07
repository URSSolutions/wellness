class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.string :description
      t.integer :professional_id
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
  end
end
