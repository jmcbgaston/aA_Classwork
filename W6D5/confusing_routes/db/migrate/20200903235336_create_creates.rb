class CreateCreates < ActiveRecord::Migration[5.2]
  def change
    create_table :creates do |t|
      t.string :ArtWorkShare

      t.timestamps
    end
  end
end
