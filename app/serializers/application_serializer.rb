class ApplicationSerializer < ActiveModel::Serializer
  def class_name
    object.class.to_s
  end
end
