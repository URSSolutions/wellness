class AddFieldToUser < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :occupation, :string
    add_column :users, :phone, :string
    add_column :users, :birth_date, :datetime
    add_column :users, :gender, :integer
    add_column :users, :height, :float
    add_column :users, :weight, :float
    add_column :users, :physical_activities, :string
    add_column :users, :smoke, :boolean
    add_column :users, :smoke_frequency, :string
    add_column :users, :drink, :boolean
    add_column :users, :drink_frequency, :string
    add_column :users, :family_diseases, :string
    add_column :users, :medicines, :string
    add_column :users, :daily_water_quantity, :string
    add_column :users, :favorite_dishes, :string
    add_column :users, :disliked_dishes, :string
    add_column :users, :chew, :integer
  end

  def down
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :occupation
    remove_column :users, :phone
    remove_column :users, :birth_date
    remove_column :users, :gender
    remove_column :users, :height
    remove_column :users, :weight
    remove_column :users, :physical_activities
    remove_column :users, :smoke
    remove_column :users, :smoke_frequency
    remove_column :users, :drink
    remove_column :users, :drink_frequency
    remove_column :users, :family_diseases
    remove_column :users, :medicines
    remove_column :users, :daily_water_quantity
    remove_column :users, :favorite_dishes
    remove_column :users, :disliked_dishes
    remove_column :users, :chew
  end
end
