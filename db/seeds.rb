# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Friend.create([{ name: 'Kate', age: 20 }, { name: 'Joan', age: 22 }])
Review.create([
    {friend_id: 1, content: 'Review 1'},
    {friend_id: 1, content: 'Review 2'},
    {friend_id: 2, content: 'Review 3'},
    {friend_id: 2, content: 'Review 4'}
])
