class AddUniquetoPosturl < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :url, unique: true
  end
end
