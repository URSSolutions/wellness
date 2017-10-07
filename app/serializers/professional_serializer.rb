class ProfessionalSerializer < ApplicationSerializer
  attributes :id, :email, :first_name, :last_name, :occupation, :formation,
             :experience_years, :created_at, :updated_at, :class_name

end
