require_relative('photo')
include SeedPhoto


def create_user(key)
  puts "Creating user #{key}"
  User.create!( email: "arthur#{key}@42.com", password: 'abc123',
    first_name: 'Arthur', last_name: "Dent #{key}",
    occupation: 'Radialista', phone: '9912345678', birth_date: 25.years.ago,
    gender: :male, height: 1.75, weight: 75.3, physical_activities: 'Nenhuma',
    smoke: false, smoke_frequency: nil, drink: true,
    drink_frequency: 'Uma vez na semana', family_diseases: 'Muitas doenças',
    medicines: 'Um azul para ansiedade', daily_water_quantity: '1l por dia',
    favorite_dishes: 'Pizza e Macarrão', disliked_dishes: 'Frango', chew: :fast)
end

puts 'Creating Professionals'
first_professional = Professional.create!(email: 'marvin@42.com', password: 'abc123',
                     first_name: 'Marvin', last_name: 'O Robô Paranôico',
                     occupation: 'Tripulante da Heart of Gold',
                     formation: "Corporação Sirius Cybernetics GPP " +
                                '(Personalidade Humana Genuína) Tecnologia',
                     experience_years: 10 )
second_professional = Professional.create!(email: 'tricia@42.com', password: 'abc123',
                     first_name: 'Tricia', last_name: 'MacMillan',
                     occupation: 'Matemática and Astrofísica',
                     formation: 'Desconhecida', experience_years: 5 )

2.times do |event_number|
  puts 'Creating Event'
  initial_date = 1.day.ago
  event = Event.create!(name: "Dieta da toalha de Ford #{event_number}", max_attendees: 20,
                        description: 'Use sua toalha(Da qual deveria estar com' +
                        ' você o tempo todo), para perder peso!', initial_date: initial_date,
                        final_date: (initial_date + 1.month), price: 99.99)

  first_professional.events << event
  second_professional.events << event

  3.times do |user_number|
    current_user = create_user(event_number.to_s + user_number.to_s)
    puts "Subscribing user #{user_number} to event #{event.id}"
    subscription = Subscription.create!(user: current_user, event: event)

    (event.final_date.to_date - event.initial_date.to_date).to_i.times do |day_number|
      puts "Creating day #{day_number}"
      day = Day.create!(subscription: subscription,
                        date: event.initial_date + day_number.day)

      3.times do |activity_number|
        puts "Creating meal #{activity_number} to user #{user_number}"
        day.activities.create!(name: "Almoço #{activity_number.to_s}",
                               photo: PHOTO, category: :meal,
                               created_at: day.date)
      end

      puts "Creating physical activity to user #{user_number}"
      day.activities.create!(name: "Corrida noturna",
                             description: '3km - 1 hora',
                             category: :physical, created_at: day.date)

      puts "Creating weight activity to user #{user_number}"
      day.activities.create!(description: (84.6 + (rand() * 10)).to_s,
                             category: :weight, created_at: day.date)

      puts "Creating feedback to user #{user_number}"
      Feedback.create!(day: day, professional: first_professional,
                       description: "Poise, desista, estamos todos perdidos")
      Feedback.create!(day: day, professional: second_professional,
                       description: "Boa, mire nas estrelas")
    end
  end
end
