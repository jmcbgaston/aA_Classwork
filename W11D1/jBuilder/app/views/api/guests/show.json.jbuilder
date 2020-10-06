json.extract! @guest, :name, :age, :favorite_color

# {
#     name: name,
#     age: age,
#     favorite_color: favorite_color,
    
json.gifts do
    json.array! @guest.gifts do |gift|
        json.extract! gift, :title, :description

        # json.title gift.title
        # json.description gift.description
    end
end

#     gifts: [
#         {t: t, d: d},
#         {t: t, d: d},
#         {t: t, d: d}
#     ]
# }