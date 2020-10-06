json.array! @gifts.each do |gift|
    json.extract! gift, :title, :description
end

# gifts
# {
#     {t: t, d: d}
#     {t: t, d: d}
#     {t: t, d: d}
#     {t: t, d: d}
# }

# json.array! @guests.each do |guest| 

#     json.partial! 'guest', guest: guest
#     # json.name guest.name,
#     # json.age guest.age, 
#     # json.favorite_color guest.favorite_color

# end