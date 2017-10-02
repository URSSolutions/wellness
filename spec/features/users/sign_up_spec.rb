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
    fill_in "Senha", with: password
    fill_in "Confirmação de senha", with: password
    fill_in "Nome", with: first_name
    fill_in "Sobrenome", with: last_name
    fill_in "Profissão", with: occupation
    fill_in "Telefone", with: phone
    fill_in "user_birth_date", with: birth_date
    find(:id, 'user_gender').find(:option, gender).select_option
    fill_in "Altura", with: height
    fill_in "Peso", with: weight
    fill_in "Atividades Físicas", with: physical_activities
    find(:id, "user_smoke").set(smoke)
    fill_in "Quantidade de cigarros por dia", with: smoke_frequency
    find(:id, "user_drink").set(drink)
    fill_in "Frequencia do consumo de bebida", with: drink_frequency
    fill_in "Histórico de doenças na família", with: family_diseases
    fill_in "Medicamentos atualmente utilizados", with: medicines
    fill_in "Frequencia do consumo de água", with: daily_water_quantity
    fill_in "Pratos favoritos", with: favorite_dishes
    fill_in "Pratos que não gosta", with: disliked_dishes
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
