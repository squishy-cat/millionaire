# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating questions..."

Question.create(
    [   
        { body: "What language does Node.js use?" }, 
        { body: "When did the website `Facebook` launch?" }, 
        { body: "What is the only sport that was played on the moon?"}, 
        { body: "When one is envious, they are said to be what color?" }, 
        { body: "What animal breathes out of its butt?" }, 
        { body: "What is the #1 seller at Walmart?" }, 
        { body: "What alcoholic drink is mainly made from juniper berries?" }, 
        { body: "A dog sweats through which part of its body?" }, 
        { body: "What's a group of kittens called?" }, 
        { body: "In the state of Georgia, it is illegal to eat what with a fork?" }, 
        { body: "Where do kiwi fruits orginally come from?" }, 
        { body: "How many degrees does the earth rotate each hour?" }, 
        { body: "What comes down but never goes up?" }, 
        { body: "To celebrate its 30th birthday (in 2010), Google placed a playable verison of what arcade game on its homepage?" }, 
        { body: "What famous actress once tried to hire a hitman to kill her?" }
    ]
)

puts "Creating answers..."

Answer.create(
    [{
        text: "TypeScript",
        correct: false,
        question_id: 1
      },
      {
        text: "JavaScript",
        correct: true,
        question_id: 1
      },
      {
        text: "React",
        correct: false,
        question_id: 1
      },
      {
        text: "Python",
        correct: false,
        question_id: 1
      },
      {
        text: "2004",
        correct: true,
        question_id: 2
      },
      {
        text: "2005",
        correct: false,
        question_id: 2
      },
      {
        text: "2006",
        correct: false,
        question_id: 2
      },
      {
        text: "2007",
        correct: false,
        question_id: 2
      },
      {
        text: "Trampoline",
        correct: false,
        question_id: 3
      },
      {
        text: "Football",
        correct: false,
        question_id: 3
      },
      {
        text: "Baseball",
        correct: false,
        question_id: 3
      },
      {
        text: "Golf",
        correct: true,
        question_id: 3
      },
      {
        text: "Red",
        correct: false,
        question_id: 4
      },
      {
        text: "Green",
        correct: true,
        question_id: 4
      },
      {
        text: "White",
        correct: false,
        question_id: 4
      },
      {
        text: "Black",
        correct: false,
        question_id: 4
      },
      {
        text: "Turtles",
        correct: true,
        question_id: 5
      },
      {
        text: "Humans",
        correct: false,
        question_id: 5
      },
      {
        text: "Birds",
        correct: false,
        question_id: 5
      },
      {
        text: "Caterpillars",
        correct: false,
        question_id: 5
      },
      {
        text: "Televisions", 
        correct: false,
        question_id: 6
      },
      {
        text: "Storage Containers",
        correct: false,
        question_id: 6
      },
      {
        text: "Toilet Papers",
        correct: false,
        question_id: 6
      },
      {
        text: "Bananas",
        correct: true,
        question_id: 6
      },
      {
        text: "Wine",
        correct: false,
        question_id: 7
      },
      {
        text: "Gin",
        correct: true,
        question_id: 7
      },
      {
        text: "Vodka",
        correct: false,
        question_id: 7
      },
      {
        text: "Whiskey",
        correct: false,
        question_id: 7
      },
      {
        text: "Its paw",
        correct: true,
        question_id: 8
      },
      {
        text: "Its nose",
        correct: false,
        question_id: 8
      },
      {
        text: "Its tongue",
        correct: false,
        question_id: 8
      },
      {
        text: "Its mouth",
        correct: false,
        question_id: 8
      },
      {
        text: "Kitties",
        correct: false,
        question_id: 9
      },
      {
        text: "Kits",
        correct: false,
        question_id: 9
      },
      {
        text: "Kittle",
        correct: false,
        question_id: 9
      },
      {
        text: "Kindle",
        correct: true,
        question_id: 9
      },
      {
        text: "Sweet Tea",
        correct: false,
        question_id: 10
      },
      {
        text: "Fried Chicken",
        correct: true,
        question_id: 10
      },
      {
        text: "Fries",
        correct: false,
        question_id: 10
      },
      {
        text: "Pizza",
        correct: false,
        question_id: 10
      },
      {
        text: "China",
        correct: true,
        question_id: 11
      },
      {
        text: "France",
        correct: false,
        question_id: 11
      },
      {
        text: "New Zealand",
        correct: false,
        question_id: 11
      },
      {
        text: "Singapore",
        correct: false,
        question_id: 11
      },
      {
        text: "14 degrees", 
        correct: false,
        question_id: 12
      },
      {
        text: "11 degrees",
        correct: false,
        question_id: 12
      },
      {
        text: "12 degrees",
        correct: false,
        question_id: 12
      },
      {
        text: "15 degrees",
        correct: true,
        question_id: 12
      },
      {
        text: "My hope during phase 1",
        correct: false,
        question_id: 13
      },
      {
        text: "Rain",
        correct: true,
        question_id: 13
      },
      {
        text: "The amount in my bank account",
        correct: false,
        question_id: 13
      },
      {
        text: "Clouds",
        correct: false,
        question_id: 13
      },
      {
        text: "Pac-Man",
        correct: true,
        question_id: 14
      },
      {
        text: "Tetris",
        correct: false,
        question_id: 14
      },
      {
        text: "Pong",
        correct: false,
        question_id: 14
      },
      {
        text: "Tic-tac-toe",
        correct: false,
        question_id: 14
      },
      {
        text: "Elizabeth Taylor",
        correct: false,
        question_id: 15
      },
      {
        text: "Debbie Reynolds",
        correct: false,
        question_id: 15
      },
      {
        text: "Marilyn Monroe",
        correct: false,
        question_id: 15
      },
      {
        text: "Angelina Jolie",
        correct: true,
        question_id: 15
      }
    ]
)

puts "Finished creating data!"