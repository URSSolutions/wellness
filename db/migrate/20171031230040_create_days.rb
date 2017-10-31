class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.integer :subscription_id
      t.date :date

      t.timestamps
    end
  end
end
