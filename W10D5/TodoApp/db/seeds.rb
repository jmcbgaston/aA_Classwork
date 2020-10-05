# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

todo1 = Todo.create({title: "Mow the lawn",body: "Get enough money",done: false})
todo2 = Todo.create({title: "Swim",body: "Get exercise", done: false})
todo3 = Todo.create({title: "Drink Water",body: "Be more healthy",done: true})
todo4 = Todo.create({title: "Be more social",body: "Hit up a club",done: false})
todo5 = Todo.create({title: "Win kahoot",body: "Get gud", done: true})

