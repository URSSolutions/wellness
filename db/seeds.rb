require_relative('photo')
include SeedPhoto


def create_user(key)
  puts "Creating user #{key}"
  User.create!( email: "arthur#{key}@42.com", password: 'abc123',
    first_name: 'Arthur', last_name: "Dent #{key}",
    occupation: 'Radialist', phone: '9912345678', birth_date: 25.years.ago,
    gender: :male, height: 1.75, weight: 75.3, physical_activities: 'None',
    smoke: false, smoke_frequency: nil, drink: true,
    drink_frequency: 'Once in a week', family_diseases: 'A lot of them',
    medicines: 'The blue one for anxiety', daily_water_quantity: '1l per day',
    favorite_dishes: 'Pizza and pasta', disliked_dishes: 'chicken', chew: :fast)
end

puts 'Creating Professionals'
first_professional = Professional.create!(email: 'marvin@42.com', password: 'abc123',
                     first_name: 'Marvin', last_name: 'the Paranoid Robot',
                     occupation: 'crew at Heart of Gold',
                     formation: "Sirius Cybernetics Corporation's GPP " +
                                '(Genuine People Personalities) technology',
                     experience_years: 10 )
second_professional = Professional.create!(email: 'tricia@42.com', password: 'abc123',
                     first_name: 'Tricia', last_name: 'MacMillan',
                     occupation: 'Mathematician and Astrophysicist',
                     formation: 'Unknown', experience_years: 5 )

2.times do |event_number|
  puts 'Creating Event'
  event = Event.create!(name: "Ford towel diet #{event_number}", max_attendees: 20,
                        description: 'Using your towel(which should always be' +
                        ' with you), to lose weight', initial_date: Time.current,
                        final_date: 1.month.from_now, price: 99.99)

  first_professional.events << event
  second_professional.events << event

  10.times do |user_number|
    current_user = create_user(event_number.to_s + user_number.to_s)
    puts "Subscribing user #{user_number} to event #{event.id}"
    Subscription.create(user: current_user, event: event)

    5.times do |activity_number|
      puts "Creating meal #{activity_number} to user #{user_number}"
      current_user.activities.create!(name: "Lunch#{activity_number.to_s}",
                                      event: event,
                                      photo: PHOTO, category: :meal)

      puts "Creating physical activity #{activity_number} to user #{user_number}"
      current_user.activities.create!(name: "Night run - #{activity_number.to_s}",
                                      description: '3km - 1 hour',
                                      event: event, category: :physical)

      puts "Creating weight activity #{activity_number} to user #{user_number}"
      current_user.activities.create!(description: (84.6 + (rand() * 10)).to_s,
                                      event: event, category: :weight,
                                      created_at: activity_number.days.ago)
    end

    puts "Creating feedback to user #{user_number}"
    if user_number.even?
      Feedback.create!(user: current_user, professional: first_professional,
                       event: event, description: "Yeah, give up, we're all doomed")
    else
      Feedback.create!(user: current_user, professional: second_professional,
                       event: event, description: "Nice, shoot for the stars")
    end
  end
end
