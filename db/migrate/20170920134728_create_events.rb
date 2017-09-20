class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :max_attendees
      t.text :description
      t.date :initial_date
      t.date :final_date
      t.float :price

      t.timestamps
    end
  end
end
