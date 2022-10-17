# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
purposes = ["business","assest","recurrent","bill payment","travel"]
categories = ["urgent","average","low"]
passwords = []
puts "Db is seeding..."

#Seeding the password was a bit tricky. I used Irb and did require "bcrypt" and then use BCrypt::Password.create("mwaura") to et the hashed password.
Admin.create!(first_name:"samuel",last_name:"mwaura",username:"mwaura",password_digest:"$2a$12$LTR88AnQAYgUgLcgOjcMbeIYGytkdMtPdQvt1pDqP.clo.QwLoQ1S",role:"admin")
20.times do
    Loan.create!(name:Faker::Company.unique.buzzword,timing:rand(1..40),purpose:purposes[rand(0..4)])
    password = Faker::Name.unique.last_name
    passwords << password
    Member.create!(username:Faker::Name.unique.first_name,password:password,role:"member")
end

80.times do
    LoanApplication.create!(category:categories[rand(0..2)], member_id:rand(1..20),loan_id:rand(1..20))
end
puts "Db is seeded completely!"

pp passwords

