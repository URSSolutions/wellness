require "rails_helper"

RSpec.feature "Profissional sign in", type: :feature do
  let(:email) { 'test@wellness.com' }
  let(:password) { 'abc123' }

  let!(:profissional) do
    Profissional.create!(first_name: 'John', last_name: 'Test',
                     occupation: 'Cardiologist', formation: 'Random University',
                     experience_years: 3, email: email, password: password)
  end

  scenario 'Profissional loging in' do
    visit '/profissionals/sign_in'
    logged_times = profissional.sign_in_count

    fill_in "Email", with: email
    fill_in "Password", with: password

    click_button "Log in"

    profissional.reload

    expect(profissional.sign_in_count).to eq(logged_times + 1)
  end
end
