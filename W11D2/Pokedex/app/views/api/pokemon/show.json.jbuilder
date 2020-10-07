json.pokemon do
    json.extract! @poke, :id, :name, :attack, :defense
    json.moves @poke.moves
    json.extract! @poke, :poke_type, :image_url, :item_ids
    # json.item_ids do
    #     json.array! @poke.items do |item|
    #         json.extract! item, :id
    #     end
    # end
end

json.items do
    @poke.items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        end
    end
end