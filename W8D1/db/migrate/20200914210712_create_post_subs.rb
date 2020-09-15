class CreatePostSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :post_subs do |t|
      t.integer :sub_id, null: false
      t.integer :post_id, null: false

      t.timestamps
    end
    add_index :post_subs, :sub_id
    add_index :post_subs, :post_id
    # add_index(post_subs: {post_id: unique: true})
  end
end

# class AddIndexToLikes < ActiveRecord::Migration[5.2]
#   def change
#     # add_index :likes, :chirp_id
#     add_index :likes, :liker_id

#     add_index :likes, [:chirp_id,:liker_id], unique: true
#     #                   ^ auto adds index for chirp_id
#   end
# end

#   create_table "likes", force: :cascade do |t|
#     t.integer "liker_id", null: false
#     t.integer "chirp_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["chirp_id", "liker_id"], name: "index_likes_on_chirp_id_and_liker_id", unique: true
#     t.index ["liker_id"], name: "index_likes_on_liker_id"
#   end