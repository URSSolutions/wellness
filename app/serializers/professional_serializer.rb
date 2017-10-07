class ProfessionalSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :occupation, :formation,
             :experience_years, :created_at, :updated_at, :class_name

  def class_name
    object.class.to_s
  end
end
