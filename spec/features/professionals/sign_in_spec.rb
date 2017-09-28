require "rails_helper"

RSpec.feature "professional sign in", type: :feature do
  let(:email) { 'test@wellness.com' }
  let(:password) { 'abc123' }

  let!(:professional) do
    Professional.create!(first_name: 'John', last_name: 'Test',
                     occupation: 'Cardiologist', formation: 'Random University',
                     experience_years: 3, email: email, password: password)
  end

  scenario 'professional loging in' do
    visit '/professionals/sign_in'
    logged_times = professional.sign_in_count

    fill_in "Email", with: email
    fill_in "Password", with: password

    click_button "Log in"

    professional.reload

    expect(professional.sign_in_count).to eq(logged_times + 1)
  end
end
