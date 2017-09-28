class CreateEventsProfessionals < ActiveRecord::Migration[5.1]
  def change
    create_table :events_professionals do |t|
      t.integer :professional_id
      t.integer :event_id
    end
  end
end
