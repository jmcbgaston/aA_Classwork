class EditArtworks < ActiveRecord::Migration[5.2]
  def change
    change_column :artworks, :title, :string, unique: true
    change_column :artworks, :artist_id, :integer, unique: true
  end
end 
