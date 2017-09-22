class DeviseSanitizerService
  def self.perform(params, klass)
    return unless klass == User

    Sanitizers::UsersParams.perform params
  end
end
