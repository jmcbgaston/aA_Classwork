# json.extract! shirt, :id, :style, :price#, :image_url

#json.array! @guests.each do |guest|
    #json.name guest.name, #=> {'name': "gname"}
    #json.age guest.age, 
    #json.favorite_color guest.favorite_color
#end
json.extract! guest, :name, :age, :favorite_color
# json.partial! 'pupper', pupper: @pupper