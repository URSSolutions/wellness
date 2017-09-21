require "rails_helper"

RSpec.feature "User sign up", type: :feature do
  let(:email) { 'john@test.com' }
  let(:password) { '123456' }
  let(:first_name) { 'john' }
  let(:last_name) { 'test' }
  let(:occupation) { 'dev' }
  let(:phone) { '12354678' }
  let(:birth_date) { 20.years.ago }
  let(:gender) { 'Masculino' }
  let(:height) { 1.5 }
  let(:weight) { 70 }
  let(:physical_activities) { 'a lot' }
  let(:smoke) { false }
  let(:smoke_frequency) { 'never' }
  let(:drink) { true }
  let(:drink_frequency) { 'once in a week' }
  let(:family_diseases) { 'none' }
  let(:medicines) { 'none' }
  let(:daily_water_quantity) { 2 }
  let(:favorite_dishes) { 'pizza' }
  let(:disliked_dishes) { 'ice cream' }
  let(:chew) { 'Rápida' }

  scenario "User creates a new account" do
    visit "/users/sign_up"

    fill_in "Email", with: email
    fill_in "Password", with: password
    fill_in "Password confirmation", with: password
    fill_in "First name", with: first_name
    fill_in "Last name", with: last_name
    fill_in "Occupation", with: occupation
    fill_in "Phone", with: phone
    CapybaraHelpers.select_date page, birth_date, from: 'user_birth_date'
    find(:id, 'user_gender').find(:option, gender).select_option
    fill_in "Height", with: height
    fill_in "Weight", with: weight
    fill_in "Physical activities", with: physical_activities
    find(:id, "user_smoke").set(smoke)
    fill_in "Smoke frequency", with: smoke_frequency
    find(:id, "user_drink").set(drink)
    fill_in "Drink frequency", with: drink_frequency
    fill_in "Family diseases", with: family_diseases
    fill_in "Medicines", with: medicines
    fill_in "Daily water quantity", with: daily_water_quantity
    fill_in "Favorite dishes", with: favorite_dishes
    fill_in "Disliked dishes", with: disliked_dishes
    find(:id, 'user_chew').find(:option, chew).select_option

    click_button "Sign up"

    user = User.first

    expect(user).to be_truthy

    expect(user.email).to eq(email)
    expect(user.first_name).to eq(first_name)
    expect(user.last_name).to eq(last_name)
    expect(user.occupation).to eq(occupation)
    expect(user.phone).to eq(phone)
    expect(user.birth_date.year).to have_text(birth_date.year)
    expect(user.birth_date.day).to have_text(birth_date.day)
    expect(user.birth_date.month).to have_text(birth_date.month)
    expect(user.gender).to eq('male')
    expect(user.height).to eq(height)
    expect(user.weight).to eq(weight)
    expect(user.physical_activities).to eq(physical_activities)
    expect(user.smoke).to eq(smoke)
    expect(user.smoke_frequency).to eq(smoke_frequency)
    expect(user.drink).to eq(drink)
    expect(user.drink_frequency).to eq(drink_frequency)
    expect(user.family_diseases).to eq(family_diseases)
    expect(user.medicines).to eq(medicines)
    expect(user.daily_water_quantity).to eq(daily_water_quantity.to_s)
    expect(user.favorite_dishes).to eq(favorite_dishes)
    expect(user.disliked_dishes).to eq(disliked_dishes)
    expect(user.chew).to eq('fast')
  end
end
