class Sanitizers::UsersParams
  def self.perform(params)
    params.permit(:sign_up, keys: parameters)
  end

  def self.parameters
    [ :first_name, :last_name, :occupation, :phone, :birth_date, :gender,
      :height, :weight, :physical_activities, :smoke, :smoke_frequency, :drink,
      :drink_frequency, :family_diseases, :medicines, :daily_water_quantity,
      :favorite_dishes, :disliked_dishes, :chew ]
  end
end
